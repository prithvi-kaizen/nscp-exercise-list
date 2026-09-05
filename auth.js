// Netaji Sports Club: Member Access & Roster Management System
// Phone + 4-digit PIN authentication, persistent device sessions,
// automatic membership expiry checks, and Cloud Firestore synchronization.

const NSC_DEFAULT_MEMBERS = [
  {
    phone: "9011445000",
    name: "Prithviraj Patil (Club Admin)",
    pin: "5000",
    startDate: "2026-01-01",
    expiryDate: "2028-12-31",
    durationMonths: 36,
    status: "active"
  },
  {
    phone: "9876543210",
    name: "Rahul Patil",
    pin: "3210",
    startDate: "2026-08-01",
    expiryDate: "2026-12-01",
    durationMonths: 4,
    status: "active"
  },
  {
    phone: "9822001122",
    name: "Amit Shinde",
    pin: "1122",
    startDate: "2026-05-01",
    expiryDate: "2026-08-31",
    durationMonths: 3,
    status: "expired"
  }
];

const ADMIN_MASTER_PIN = "2461";

const NSCAuth = (function () {
  const STORAGE_KEY_MEMBERS = "nsc_members_db";
  const STORAGE_KEY_SESSION = "nsc_member_session";
  const STORAGE_KEY_ADMIN = "nsc_admin_unlocked";
  const STORAGE_KEY_FIREBASE = "nsc_firebase_config_custom";

  let selectedPlanMonths = 1;
  let rosterFilter = "all";
  let firestoreDb = null;
  let isCloudSyncActive = false;

  // Phone sanitizer handles: +91, leading 0, spaces, hyphens
  function sanitizePhoneNumber(val) {
    if (!val) return "";
    let digits = String(val).trim().replace(/\D/g, "");
    if (digits.length === 12 && digits.startsWith("91")) {
      digits = digits.slice(2);
    } else if (digits.length === 11 && digits.startsWith("0")) {
      digits = digits.slice(1);
    } else if (digits.length > 10) {
      digits = digits.slice(-10);
    }
    return digits;
  }

  // Database helpers
  function getMembersDB() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_MEMBERS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge default members if not present
          let updated = false;
          NSC_DEFAULT_MEMBERS.forEach(def => {
            const exists = parsed.some(m => sanitizePhoneNumber(m.phone) === def.phone);
            if (!exists) {
              parsed.unshift(def);
              updated = true;
            }
          });
          if (updated) {
            saveMembersDB(parsed);
          }
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to parse members DB", e);
    }
    saveMembersDB(NSC_DEFAULT_MEMBERS);
    return [...NSC_DEFAULT_MEMBERS];
  }

  function saveMembersDB(members) {
    try {
      localStorage.setItem(STORAGE_KEY_MEMBERS, JSON.stringify(members));
    } catch (e) {
      console.error("Failed to save members DB", e);
    }
  }

  function getMemberSession() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_SESSION);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  function saveMemberSession(member) {
    try {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(member));
    } catch (e) {
      console.error("Failed to save session", e);
    }
  }

  function clearMemberSession() {
    try {
      localStorage.removeItem(STORAGE_KEY_SESSION);
    } catch (e) {
      console.error("Failed to clear session", e);
    }
  }

  // Expiry calculations
  function calculateExpiry(expiryDateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expiry = new Date(expiryDateStr);
    expiry.setHours(23, 59, 59, 999);

    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const isExpired = diffDays < 0;

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = expiry.toLocaleDateString("en-IN", options);

    return {
      isExpired,
      daysRemaining: Math.max(0, diffDays),
      formattedDate
    };
  }

  // ─── CLOUD DATABASE SYNCHRONIZATION (FIREBASE FIRESTORE) ───────────────────
  function initCloudDatabase() {
    let config = window.NSC_FIREBASE_CONFIG || {};
    try {
      const savedConfig = localStorage.getItem(STORAGE_KEY_FIREBASE);
      if (savedConfig) {
        config = JSON.parse(savedConfig);
      }
    } catch (e) {
      console.warn("Could not parse saved Firebase config", e);
    }

    if (!config || !config.apiKey || !config.projectId) {
      updateSyncUI(false, "Local Mode (Not Connected)", "Saved in this browser only");
      return;
    }

    try {
      if (typeof firebase !== "undefined") {
        if (!firebase.apps || !firebase.apps.length) {
          firebase.initializeApp(config);
        }
        firestoreDb = firebase.firestore();

        // Enable offline persistence for gym floor
        firestoreDb.enablePersistence({ synchronizeTabs: true }).catch(err => {
          if (err.code !== "failed-precondition" && err.code !== "unimplemented") {
            console.warn("Firestore persistence warning:", err);
          }
        });

        isCloudSyncActive = true;
        updateSyncUI(true, "Cloud Connected", "Real-time sync active across all devices");
        subscribeToCloudRoster();
      } else {
        updateSyncUI(false, "Firebase SDK Loading...", "Connecting...");
      }
    } catch (err) {
      console.error("Firebase init failed:", err);
      updateSyncUI(false, "Connection Error", err.message || "Failed to initialize");
    }
  }

  function updateSyncUI(isConnected, titleText, subText) {
    const badge = document.getElementById("cloudSyncBadge");
    const dot = document.getElementById("cloudStatusDot");
    const title = document.getElementById("cloudStatusTitle");
    const sub = document.getElementById("cloudStatusSub");

    if (badge) {
      badge.textContent = isConnected ? "Cloud Synced" : "Local Mode";
      badge.className = `cloud-sync-badge ${isConnected ? "sync-cloud" : "sync-local"}`;
    }
    if (dot) {
      dot.className = `cloud-status-dot ${isConnected ? "dot-online" : "dot-offline"}`;
    }
    if (title) title.textContent = `Firebase Cloud Sync: ${titleText}`;
    if (sub) sub.textContent = `(${subText})`;
  }

  function toggleSyncConfigBox() {
    const box = document.getElementById("cloudConfigExpand");
    const btn = document.getElementById("btnToggleSyncConfig");
    const textarea = document.getElementById("firebaseConfigTextarea");
    if (!box) return;
    const isHidden = box.style.display === "none";
    box.style.display = isHidden ? "block" : "none";
    if (btn) btn.textContent = isHidden ? "Hide Config" : "Configure Cloud Sync";

    if (isHidden && textarea && !textarea.value) {
      const saved = localStorage.getItem(STORAGE_KEY_FIREBASE);
      if (saved) {
        textarea.value = saved;
      } else if (window.NSC_FIREBASE_CONFIG && window.NSC_FIREBASE_CONFIG.apiKey) {
        textarea.value = JSON.stringify(window.NSC_FIREBASE_CONFIG, null, 2);
      }
    }
  }

  function saveFirebaseConfigFromUI() {
    const textarea = document.getElementById("firebaseConfigTextarea");
    if (!textarea) return;
    const raw = textarea.value.trim();
    if (!raw) {
      alert("Please paste your Firebase configuration object.");
      return;
    }

    try {
      let cleaned = raw;
      if (cleaned.startsWith("const firebaseConfig =")) {
        cleaned = cleaned.replace("const firebaseConfig =", "").replace(/;$/, "").trim();
      }
      const jsonStr = cleaned.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":').replace(/'/g, '"');
      const parsed = JSON.parse(jsonStr);

      if (!parsed.apiKey || !parsed.projectId) {
        alert("Config must include at least apiKey and projectId.");
        return;
      }

      localStorage.setItem(STORAGE_KEY_FIREBASE, JSON.stringify(parsed, null, 2));
      alert("Firebase configuration saved! Connecting to cloud database now...");
      initCloudDatabase();
      toggleSyncConfigBox();
    } catch (e) {
      alert("Could not parse config. Please make sure it is a valid JSON or Javascript config object.");
      console.error(e);
    }
  }

  function subscribeToCloudRoster() {
    if (!firestoreDb) return;

    firestoreDb.collection("members").onSnapshot(
      snapshot => {
        const cloudMembers = [];
        snapshot.forEach(doc => {
          cloudMembers.push(doc.data());
        });

        if (cloudMembers.length > 0) {
          saveMembersDB(cloudMembers);
          renderAdminDashboard();

          // Refresh current member status if logged in
          const session = getMemberSession();
          if (session) {
            const fresh = cloudMembers.find(
              m => sanitizePhoneNumber(m.phone) === sanitizePhoneNumber(session.phone)
            );
            if (fresh) {
              saveMemberSession(fresh);
              renderMemberStatusHeader(fresh);
            }
          }
        } else {
          // If collection is completely empty in a fresh project, seed default members
          seedInitialCloudMembers();
        }
      },
      err => {
        console.warn("Firestore snapshot listener error:", err);
      }
    );
  }

  function seedInitialCloudMembers() {
    if (!firestoreDb) return;
    NSC_DEFAULT_MEMBERS.forEach(m => {
      firestoreDb.collection("members").doc(sanitizePhoneNumber(m.phone)).set(m, { merge: true });
    });
  }

  // ─── UI AND MODAL MANAGEMENT ───────────────────────────────────────────────
  function init() {
    initCloudDatabase();
    checkInitialAccess();
    setupAdminAutoTrigger();
  }

  function checkInitialAccess() {
    const session = getMemberSession();
    const members = getMembersDB();

    if (!session) {
      showAuthModal(false);
      return;
    }

    const currentMember = members.find(
      m => sanitizePhoneNumber(m.phone) === sanitizePhoneNumber(session.phone)
    );
    if (!currentMember) {
      clearMemberSession();
      showAuthModal(false);
      return;
    }

    const { isExpired } = calculateExpiry(currentMember.expiryDate);
    if (isExpired) {
      showAuthModal(true, currentMember);
    } else {
      hideAuthModal();
      renderMemberStatusHeader(currentMember);
    }
  }

  function showAuthModal(isExpiredMode = false, memberData = null) {
    const modal = document.getElementById("memberAuthModal");
    const formView = document.getElementById("authFormView");
    const expiredView = document.getElementById("authExpiredView");
    const modalTitle = document.getElementById("authModalTitle");
    const modalSubhead = document.getElementById("authModalSubhead");
    if (!modal) return;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    if (isExpiredMode && memberData) {
      if (formView) formView.style.display = "none";
      if (expiredView) expiredView.style.display = "block";
      if (modalTitle) modalTitle.textContent = "Membership Inactive";
      if (modalSubhead) {
        modalSubhead.textContent = `Member ${memberData.name} (+91 ${memberData.phone}) expired on ${calculateExpiry(memberData.expiryDate).formattedDate}.`;
      }
    } else {
      if (formView) formView.style.display = "block";
      if (expiredView) expiredView.style.display = "none";
      if (modalTitle) modalTitle.textContent = "Member Access";
      if (modalSubhead) {
        modalSubhead.textContent = "Exclusive exercise and machine reference for registered members of Netaji Sports Club, Pandharpur.";
      }
      const phoneInput = document.getElementById("memberPhoneInput");
      if (phoneInput) {
        setTimeout(() => phoneInput.focus(), 200);
      }
    }
  }

  function hideAuthModal() {
    const modal = document.getElementById("memberAuthModal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  }

  function showLoginForm() {
    showAuthModal(false);
    clearAuthAlert();
  }

  function handleLoginSubmit() {
    const phoneInput = document.getElementById("memberPhoneInput");
    const pinInput = document.getElementById("memberPinInput");
    if (!phoneInput || !pinInput) return;

    const rawPhone = sanitizePhoneNumber(phoneInput.value);
    const rawPin = pinInput.value.trim().replace(/\D/g, "");
    const lang = localStorage.getItem("nsc_lang") || "en";

    if (rawPhone.length !== 10) {
      showAuthAlert(
        lang === "mr"
          ? "कृपया १० अंकी वैध मोबाईल नंबर टाका."
          : "Please enter a valid 10-digit mobile number."
      );
      phoneInput.focus();
      return;
    }

    if (rawPin.length !== 4) {
      showAuthAlert(
        lang === "mr"
          ? "कृपया ४ अंकी पिन टाका (डिफ़ॉल्ट: नंबरचे शेवटचे ४ अंक)."
          : "Please enter your 4-digit PIN (default: last 4 digits of phone)."
      );
      pinInput.focus();
      return;
    }

    const members = getMembersDB();
    const member = members.find(
      m => sanitizePhoneNumber(m.phone) === rawPhone
    );

    if (!member) {
      // If not in local cache, check Cloud Firestore in real time!
      if (firestoreDb && isCloudSyncActive) {
        showAuthAlert("Checking cloud register...");
        firestoreDb
          .collection("members")
          .doc(rawPhone)
          .get()
          .then(docSnap => {
            if (docSnap.exists) {
              const freshMember = docSnap.data();
              const list = getMembersDB();
              list.unshift(freshMember);
              saveMembersDB(list);
              proceedMemberLogin(freshMember, rawPin);
            } else {
              showAuthAlert(
                lang === "mr"
                  ? `मोबाईल नंबर +91 ${rawPhone} नोंदणीत सापडला नाही. ॲडमिन पोर्टलवरून नोंदणी करा.`
                  : `Mobile number +91 ${rawPhone} not found in register. Please register in Admin Portal or contact front desk.`
              );
            }
          })
          .catch(() => {
            showAuthAlert(`Mobile number +91 ${rawPhone} not found in register.`);
          });
        return;
      }

      showAuthAlert(
        lang === "mr"
          ? `मोबाईल नंबर +91 ${rawPhone} नोंदणीत सापडला नाही. ॲडमिन पोर्टलवरून नोंदणी करा.`
          : `Mobile number +91 ${rawPhone} not found in register. Please register in Admin Portal or contact front desk.`
      );
      return;
    }

    proceedMemberLogin(member, rawPin);
  }

  function proceedMemberLogin(member, rawPin) {
    const lang = localStorage.getItem("nsc_lang") || "en";
    const pinInput = document.getElementById("memberPinInput");

    if (member.pin !== rawPin) {
      showAuthAlert(
        lang === "mr"
          ? "चुकीचा पिन. डिफ़ॉल्ट पिन: मोबाईल नंबरचे शेवटचे ४ अंक."
          : "Incorrect PIN. Default PIN is the last 4 digits of your phone number."
      );
      if (pinInput) pinInput.focus();
      return;
    }

    const { isExpired } = calculateExpiry(member.expiryDate);
    if (isExpired) {
      showAuthModal(true, member);
      return;
    }

    saveMemberSession(member);
    hideAuthModal();
    renderMemberStatusHeader(member);
    clearAuthAlert();

    const phoneInput = document.getElementById("memberPhoneInput");
    if (phoneInput) phoneInput.value = "";
    if (pinInput) pinInput.value = "";
  }

  function showAuthAlert(msg) {
    const alertBox = document.getElementById("authAlertBox");
    if (alertBox) {
      alertBox.textContent = msg;
      alertBox.style.display = "block";
    }
  }

  function clearAuthAlert() {
    const alertBox = document.getElementById("authAlertBox");
    if (alertBox) {
      alertBox.textContent = "";
      alertBox.style.display = "none";
    }
  }

  function logout() {
    clearMemberSession();
    const badgeWrapper = document.getElementById("memberBadgeWrapper");
    if (badgeWrapper) badgeWrapper.style.display = "none";
    const dropdown = document.getElementById("memberDropdownMenu");
    if (dropdown) dropdown.style.display = "none";
    showAuthModal(false);
  }

  function renderMemberStatusHeader(member) {
    const badgeWrapper = document.getElementById("memberBadgeWrapper");
    const pillName = document.getElementById("memberPillName");
    const dropName = document.getElementById("dropMemberName");
    const dropPhone = document.getElementById("dropMemberPhone");
    const dropExpiry = document.getElementById("dropExpiryVal");
    const dropDays = document.getElementById("dropDaysVal");

    if (!member) {
      if (badgeWrapper) badgeWrapper.style.display = "none";
      return;
    }

    if (badgeWrapper) badgeWrapper.style.display = "inline-flex";
    if (pillName) pillName.textContent = member.name.split(" ")[0];
    if (dropName) dropName.textContent = member.name;
    if (dropPhone) dropPhone.textContent = `+91 ${sanitizePhoneNumber(member.phone)}`;

    const { formattedDate, daysRemaining } = calculateExpiry(member.expiryDate);
    if (dropExpiry) dropExpiry.textContent = `Valid until ${formattedDate}`;
    if (dropDays) dropDays.textContent = `${daysRemaining} days remaining`;
  }

  function toggleMemberDropdown() {
    const menu = document.getElementById("memberDropdownMenu");
    const btn = document.getElementById("memberStatusBtn");
    if (!menu) return;
    const isShown = menu.style.display === "flex";
    menu.style.display = isShown ? "none" : "flex";
    if (btn) btn.setAttribute("aria-expanded", !isShown);
  }

  // Admin portal
  function setupAdminAutoTrigger() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("admin") === "true") {
      openAdminModal();
    }
  }

  function openAdminModal() {
    const authModal = document.getElementById("memberAuthModal");
    if (authModal) authModal.style.display = "none";

    const modal = document.getElementById("adminModal");
    const pinView = document.getElementById("adminPinView");
    const dashView = document.getElementById("adminDashboardView");
    if (!modal) return;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    const isUnlocked = sessionStorage.getItem(STORAGE_KEY_ADMIN) === "true";
    if (isUnlocked) {
      if (pinView) pinView.style.display = "none";
      if (dashView) dashView.style.display = "block";
      renderAdminDashboard();
    } else {
      if (pinView) pinView.style.display = "block";
      if (dashView) dashView.style.display = "none";
      const pinInput = document.getElementById("adminPasscodeInput");
      if (pinInput) {
        pinInput.value = "";
        setTimeout(() => pinInput.focus(), 200);
      }
    }
  }

  function closeAdminModal() {
    const modal = document.getElementById("adminModal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
    const session = getMemberSession();
    if (!session) {
      showAuthModal(false);
    }
  }

  function verifyAdminPin() {
    const pinInput = document.getElementById("adminPasscodeInput");
    const errBox = document.getElementById("adminPinError");
    const pinView = document.getElementById("adminPinView");
    const dashView = document.getElementById("adminDashboardView");
    if (!pinInput) return;

    if (pinInput.value.trim() === ADMIN_MASTER_PIN) {
      sessionStorage.setItem(STORAGE_KEY_ADMIN, "true");
      if (errBox) errBox.style.display = "none";
      if (pinView) pinView.style.display = "none";
      if (dashView) dashView.style.display = "block";
      renderAdminDashboard();
    } else {
      if (errBox) {
        errBox.textContent = "Incorrect master passcode. Please check and try again.";
        errBox.style.display = "block";
      }
      pinInput.focus();
    }
  }

  function setPlanDuration(months) {
    selectedPlanMonths = months;
    const pills = document.querySelectorAll("#durationPills .duration-pill");
    pills.forEach(btn => {
      const attr = btn.getAttribute("data-months");
      if (months === "custom") {
        btn.classList.toggle("active", attr === "custom");
      } else {
        const m = parseInt(attr || "0", 10);
        btn.classList.toggle("active", m === months);
      }
    });

    const customDateWrap = document.getElementById("customDateWrap");
    const customDateInput = document.getElementById("newMemberCustomDate");
    if (customDateWrap) {
      if (months === "custom") {
        customDateWrap.style.display = "block";
        const todayStr = new Date().toISOString().split("T")[0];
        if (customDateInput) {
          customDateInput.min = todayStr;
          if (!customDateInput.value) {
            const defaultDate = new Date();
            defaultDate.setMonth(defaultDate.getMonth() + 1);
            customDateInput.value = defaultDate.toISOString().split("T")[0];
          }
          customDateInput.focus();
        }
      } else {
        customDateWrap.style.display = "none";
      }
    }
  }

  function handlePhoneAutoPin(phoneValue) {
    const pinInput = document.getElementById("newMemberPin");
    const clean = sanitizePhoneNumber(phoneValue);
    if (clean.length >= 4 && pinInput && !pinInput.dataset.userEdited) {
      pinInput.value = clean.slice(-4);
    }
  }

  function showAdminAddAlert(msg, type = "info", memberRecord = null) {
    const box = document.getElementById("adminAddAlert");
    if (!box) return;
    box.className = `admin-add-alert-box alert-${type}`;
    if (memberRecord && type === "success") {
      box.innerHTML = `
        <div class="alert-msg-wrap">
          <strong>${msg}</strong>
        </div>
        <button type="button" class="btn-instant-login" onclick="NSCAuth.loginAsMember('${memberRecord.phone}')">
          Log In as ${memberRecord.name} Now
        </button>
      `;
    } else {
      box.textContent = msg;
    }
    box.style.display = "flex";
  }

  function loginAsMember(phone) {
    const members = getMembersDB();
    const cleanPhone = sanitizePhoneNumber(phone);
    const member = members.find(
      m => sanitizePhoneNumber(m.phone) === cleanPhone
    );
    if (member) {
      saveMemberSession(member);
      closeAdminModal();
      hideAuthModal();
      renderMemberStatusHeader(member);
    }
  }

  function handleAdminAddMember() {
    const nameInput = document.getElementById("newMemberName");
    const phoneInput = document.getElementById("newMemberPhone");
    const pinInput = document.getElementById("newMemberPin");
    if (!nameInput || !phoneInput || !pinInput) return;

    const name = nameInput.value.trim();
    const phone = sanitizePhoneNumber(phoneInput.value);
    let pin = pinInput.value.trim().replace(/\D/g, "");

    if (!name) {
      showAdminAddAlert("Please enter member full name.", "error");
      nameInput.focus();
      return;
    }

    if (phone.length !== 10) {
      showAdminAddAlert("Please enter a valid 10-digit mobile number.", "error");
      phoneInput.focus();
      return;
    }

    if (!pin || pin.length !== 4) {
      pin = phone.slice(-4);
    }

    const startDate = new Date();
    let expiryDateStr = "";
    let durationLabel = selectedPlanMonths;

    if (selectedPlanMonths === "custom") {
      const customDateInput = document.getElementById("newMemberCustomDate");
      if (!customDateInput || !customDateInput.value) {
        showAdminAddAlert("Please select a valid custom expiry date.", "error");
        if (customDateInput) customDateInput.focus();
        return;
      }
      expiryDateStr = customDateInput.value;
      const chosen = new Date(expiryDateStr + "T23:59:59");
      if (isNaN(chosen.getTime())) {
        showAdminAddAlert("Invalid custom expiry date format.", "error");
        return;
      }
      const diffTime = chosen - startDate;
      const diffMonths = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24 * 30.4375)));
      durationLabel = diffMonths;
    } else {
      const expiry = new Date();
      expiry.setMonth(expiry.getMonth() + Number(selectedPlanMonths));
      expiryDateStr = expiry.toISOString().split("T")[0];
    }

    const members = getMembersDB();
    const existingIndex = members.findIndex(
      m => sanitizePhoneNumber(m.phone) === phone
    );

    const newMemberRecord = {
      phone,
      name,
      pin,
      startDate: startDate.toISOString().split("T")[0],
      expiryDate: expiryDateStr,
      durationMonths: durationLabel,
      status: "active"
    };

    if (existingIndex >= 0) {
      members[existingIndex] = newMemberRecord;
    } else {
      members.unshift(newMemberRecord);
    }

    saveMembersDB(members);

    // Save to Cloud Firestore if connected
    if (firestoreDb && isCloudSyncActive) {
      firestoreDb
        .collection("members")
        .doc(phone)
        .set(newMemberRecord, { merge: true })
        .catch(err => {
          console.error("Firestore write failed:", err);
        });
    }

    // Reset inputs
    nameInput.value = "";
    phoneInput.value = "";
    pinInput.value = "";
    delete pinInput.dataset.userEdited;
    const customDateWrap = document.getElementById("customDateWrap");
    const customDateInput = document.getElementById("newMemberCustomDate");
    if (customDateInput) customDateInput.value = "";
    if (customDateWrap) customDateWrap.style.display = "none";
    setPlanDuration(1);

    renderAdminDashboard();

    // Confirm registration with instant login button
    showAdminAddAlert(
      `Member ${name} (+91 ${phone}) registered successfully! PIN: ${pin}`,
      "success",
      newMemberRecord
    );

    const session = getMemberSession();
    if (session && sanitizePhoneNumber(session.phone) === phone) {
      saveMemberSession(newMemberRecord);
      renderMemberStatusHeader(newMemberRecord);
    }
  }

  function renewMember(phone, monthsToAdd) {
    const cleanPhone = sanitizePhoneNumber(phone);
    const members = getMembersDB();
    const member = members.find(
      m => sanitizePhoneNumber(m.phone) === cleanPhone
    );
    if (!member) return;

    const { isExpired } = calculateExpiry(member.expiryDate);
    const baseDate = isExpired ? new Date() : new Date(member.expiryDate);
    baseDate.setMonth(baseDate.getMonth() + monthsToAdd);

    member.expiryDate = baseDate.toISOString().split("T")[0];
    member.status = "active";
    member.durationMonths = (member.durationMonths || 0) + monthsToAdd;

    saveMembersDB(members);

    if (firestoreDb && isCloudSyncActive) {
      firestoreDb
        .collection("members")
        .doc(cleanPhone)
        .set(member, { merge: true })
        .catch(err => {
          console.error("Firestore renew write failed:", err);
        });
    }

    renderAdminDashboard();

    const session = getMemberSession();
    if (session && sanitizePhoneNumber(session.phone) === cleanPhone) {
      saveMemberSession(member);
      renderMemberStatusHeader(member);
    }
  }

  function deleteMember(phone) {
    const cleanPhone = sanitizePhoneNumber(phone);
    if (!confirm(`Revoke membership and access for ${cleanPhone}?`)) return;
    const members = getMembersDB().filter(
      m => sanitizePhoneNumber(m.phone) !== cleanPhone
    );
    saveMembersDB(members);

    if (firestoreDb && isCloudSyncActive) {
      firestoreDb
        .collection("members")
        .doc(cleanPhone)
        .delete()
        .catch(err => {
          console.error("Firestore delete failed:", err);
        });
    }

    renderAdminDashboard();

    const session = getMemberSession();
    if (session && sanitizePhoneNumber(session.phone) === cleanPhone) {
      clearMemberSession();
      renderMemberStatusHeader(null);
      showAuthModal(false);
    }
  }

  function setRosterFilter(filter) {
    rosterFilter = filter;
    const tabs = document.querySelectorAll(".admin-status-tabs .admin-tab");
    tabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.filter === filter);
    });
    renderRosterTable();
  }

  function renderAdminDashboard() {
    const members = getMembersDB();

    let activeCount = 0;
    let expiringCount = 0;
    let expiredCount = 0;

    members.forEach(m => {
      const { isExpired, daysRemaining } = calculateExpiry(m.expiryDate);
      if (isExpired) {
        expiredCount++;
      } else {
        activeCount++;
        if (daysRemaining <= 7) expiringCount++;
      }
    });

    const elActive = document.getElementById("statActiveCount");
    const elExpiring = document.getElementById("statExpiringCount");
    const elExpired = document.getElementById("statExpiredCount");
    const cntAll = document.getElementById("countFilterAll");
    const cntAct = document.getElementById("countFilterActive");
    const cntExp = document.getElementById("countFilterExpired");

    if (elActive) elActive.textContent = activeCount;
    if (elExpiring) elExpiring.textContent = expiringCount;
    if (elExpired) elExpired.textContent = expiredCount;
    if (cntAll) cntAll.textContent = members.length;
    if (cntAct) cntAct.textContent = activeCount;
    if (cntExp) cntExp.textContent = expiredCount;

    renderRosterTable();
  }

  function renderRosterTable() {
    const tbody = document.getElementById("adminRosterTbody");
    const searchInput = document.getElementById("adminRosterSearch");
    if (!tbody) return;

    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const members = getMembersDB();

    const filtered = members.filter(m => {
      const cleanP = sanitizePhoneNumber(m.phone);
      const matchSearch =
        m.name.toLowerCase().includes(query) || cleanP.includes(query);
      if (!matchSearch) return false;

      const { isExpired } = calculateExpiry(m.expiryDate);
      if (rosterFilter === "active") return !isExpired;
      if (rosterFilter === "expired") return isExpired;
      return true;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" class="admin-empty-cell">
            No matching members found. Add a member above to grant access.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered
      .map(m => {
        const { isExpired, daysRemaining, formattedDate } = calculateExpiry(
          m.expiryDate
        );
        let badgeClass = "badge-active";
        let badgeText = "Active";

        if (isExpired) {
          badgeClass = "badge-expired";
          badgeText = "Expired";
        } else if (daysRemaining <= 7) {
          badgeClass = "badge-expiring";
          badgeText = `${daysRemaining}d Left`;
        }

        const cleanP = sanitizePhoneNumber(m.phone);

        return `
          <tr>
            <td class="cell-name"><strong>${m.name}</strong></td>
            <td class="cell-phone font-mono">+91 ${cleanP}</td>
            <td class="cell-pin font-mono">${m.pin}</td>
            <td class="cell-expiry">${formattedDate}</td>
            <td class="cell-days">${isExpired ? "0" : daysRemaining}</td>
            <td><span class="status-badge ${badgeClass}">${badgeText}</span></td>
            <td class="cell-renew">
              <div class="renew-btn-group">
                <button type="button" class="renew-pill-btn" onclick="NSCAuth.renewMember('${cleanP}', 1)" title="Add 1 Month">+1M</button>
                <button type="button" class="renew-pill-btn" onclick="NSCAuth.renewMember('${cleanP}', 3)" title="Add 3 Months">+3M</button>
                <button type="button" class="renew-pill-btn" onclick="NSCAuth.renewMember('${cleanP}', 6)" title="Add 6 Months">+6M</button>
              </div>
            </td>
            <td class="cell-actions">
              <button type="button" class="roster-delete-btn" onclick="NSCAuth.deleteMember('${cleanP}')" title="Revoke member access" aria-label="Delete ${m.name}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </td>
          </tr>
        `;
      })
      .join("");
  }

  // Close dropdown on click outside
  window.addEventListener("click", e => {
    const wrapper = document.getElementById("memberBadgeWrapper");
    const menu = document.getElementById("memberDropdownMenu");
    if (menu && wrapper && !wrapper.contains(e.target)) {
      menu.style.display = "none";
      const btn = document.getElementById("memberStatusBtn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
  });

  return {
    init,
    showLoginForm,
    handleLoginSubmit,
    logout,
    toggleMemberDropdown,
    openAdminModal,
    closeAdminModal,
    verifyAdminPin,
    setPlanDuration,
    handlePhoneAutoPin,
    handleAdminAddMember,
    renewMember,
    deleteMember,
    setRosterFilter,
    renderRosterTable,
    loginAsMember,
    toggleSyncConfigBox,
    saveFirebaseConfigFromUI
  };
})();
