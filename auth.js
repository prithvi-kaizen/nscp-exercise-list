// ─── NETAJI SPORTS CLUB: MEMBER ACCESS & ROSTER SYSTEM ───────────────────────
// Provides phone + 4-digit PIN authentication, persistent device sessions,
// automatic membership expiry checks, and administrative roster management.

const NSC_DEFAULT_MEMBERS = [
  {
    phone: "9011445000",
    name: "Club Desk (Staff)",
    pin: "5000",
    startDate: "2026-01-01",
    expiryDate: "2027-12-31",
    durationMonths: 24,
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

const ADMIN_MASTER_PIN = "5000";

const NSCAuth = (function () {
  const STORAGE_KEY_MEMBERS = "nsc_members_db";
  const STORAGE_KEY_SESSION = "nsc_member_session";
  const STORAGE_KEY_ADMIN = "nsc_admin_unlocked";

  let selectedPlanMonths = 1;
  let rosterFilter = "all";

  // ─── DATABASE HELPERS ──────────────────────────────────────────────────────
  function getMembersDB() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_MEMBERS);
      if (data) {
        return JSON.parse(data);
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
      const s = localStorage.getItem(STORAGE_KEY_SESSION);
      return s ? JSON.parse(s) : null;
    } catch (e) {
      return null;
    }
  }

  function saveMemberSession(member) {
    try {
      const sessionData = {
        phone: member.phone,
        name: member.name,
        expiryDate: member.expiryDate,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(sessionData));
    } catch (e) {
      console.error("Failed to save member session", e);
    }
  }

  function clearMemberSession() {
    localStorage.removeItem(STORAGE_KEY_SESSION);
  }

  function calculateExpiry(expiryDateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const exp = new Date(expiryDateStr);
    exp.setHours(23, 59, 59, 999);

    const diffTime = exp.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const isExpired = diffDays < 0;

    return {
      isExpired,
      daysRemaining: Math.max(0, diffDays),
      diffDays,
      formattedDate: new Date(expiryDateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
    };
  }

  // ─── AUTHENTICATION FLOW ───────────────────────────────────────────────────
  function init() {
    const session = getMemberSession();
    if (!session) {
      showAuthModal(false);
      return;
    }

    // Refresh member record from database to respect renewals
    const members = getMembersDB();
    const currentRecord = members.find(m => m.phone === session.phone);

    if (!currentRecord) {
      clearMemberSession();
      showAuthModal(false);
      return;
    }

    const { isExpired } = calculateExpiry(currentRecord.expiryDate);
    if (isExpired) {
      showAuthModal(true, currentRecord);
      return;
    }

    // Active session confirmed
    hideAuthModal();
    renderMemberStatusHeader(currentRecord);
  }

  function showAuthModal(isExpired = false, member = null) {
    const modal = document.getElementById("memberAuthModal");
    const formView = document.getElementById("authFormView");
    const expiredView = document.getElementById("authExpiredView");
    if (!modal) return;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    if (isExpired && member) {
      if (formView) formView.style.display = "none";
      if (expiredView) expiredView.style.display = "block";

      const expMsg = document.getElementById("expiredLockMsg");
      const { formattedDate } = calculateExpiry(member.expiryDate);
      if (expMsg) {
        const lang = localStorage.getItem("nsc_lang") || "en";
        if (lang === "mr") {
          expMsg.textContent = `${member.name}, तुमचे नेताजी स्पोर्ट्स क्लब सदस्यत्व ${formattedDate} रोजी संपले आहे. प्रवेश पुन्हा सुरू करण्यासाठी काउंटेरवर नूतनीकरण करा.`;
        } else {
          expMsg.textContent = `Hello ${member.name}, your Netaji Sports Club membership expired on ${formattedDate}. Please renew at the club front desk to restore full access.`;
        }
      }
    } else {
      if (formView) formView.style.display = "block";
      if (expiredView) expiredView.style.display = "none";
      const phoneInput = document.getElementById("memberPhoneInput");
      if (phoneInput) setTimeout(() => phoneInput.focus(), 200);
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
    const alertBox = document.getElementById("authAlertBox");
    if (!phoneInput || !pinInput) return;

    const rawPhone = phoneInput.value.trim().replace(/\D/g, "");
    const rawPin = pinInput.value.trim();
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
          ? "कृपया ४ अंकी पिन टाका."
          : "Please enter your 4-digit PIN."
      );
      pinInput.focus();
      return;
    }

    const members = getMembersDB();
    const member = members.find(m => m.phone === rawPhone);

    if (!member) {
      showAuthAlert(
        lang === "mr"
          ? "हा मोबाईल नंबर क्लबच्या नोंदणीत सापडला नाही. कृपया काउंटेरवर (90 11 44 5000) संपर्क साधा."
          : "Mobile number not found in Netaji Sports Club register. Please visit the front desk or call 90 11 44 5000."
      );
      return;
    }

    if (member.pin !== rawPin) {
      showAuthAlert(
        lang === "mr"
          ? "चुकीचा पिन. कृपया पुन्हा प्रयत्न करा किंवा क्लब डेस्कशी संपर्क साधा."
          : "Incorrect PIN. Default PIN is the last 4 digits of your phone number."
      );
      pinInput.focus();
      return;
    }

    const { isExpired, formattedDate } = calculateExpiry(member.expiryDate);
    if (isExpired) {
      showAuthModal(true, member);
      return;
    }

    // Success
    saveMemberSession(member);
    hideAuthModal();
    renderMemberStatusHeader(member);
    clearAuthAlert();
    phoneInput.value = "";
    pinInput.value = "";
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

  // ─── HEADER STATUS BADGE ───────────────────────────────────────────────────
  function renderMemberStatusHeader(member) {
    const badgeWrapper = document.getElementById("memberBadgeWrapper");
    const nameEl = document.getElementById("memberPillName");
    const dropName = document.getElementById("dropMemberName");
    const dropPhone = document.getElementById("dropMemberPhone");
    const dropExpiry = document.getElementById("dropExpiryVal");
    const dropDays = document.getElementById("dropDaysVal");
    if (!badgeWrapper) return;

    badgeWrapper.style.display = "block";
    const { formattedDate, daysRemaining } = calculateExpiry(member.expiryDate);
    const lang = localStorage.getItem("nsc_lang") || "en";

    const firstName = member.name.split(" ")[0] || member.name;
    if (nameEl) nameEl.textContent = firstName;
    if (dropName) dropName.textContent = member.name;
    if (dropPhone) dropPhone.textContent = `+91 ${member.phone}`;
    if (dropExpiry) {
      dropExpiry.textContent =
        lang === "mr" ? `वैधता: ${formattedDate}` : `Valid until ${formattedDate}`;
    }
    if (dropDays) {
      dropDays.textContent =
        lang === "mr" ? `${daysRemaining} दिवस शिल्लक` : `${daysRemaining} days remaining`;
    }
  }

  function toggleMemberDropdown() {
    const menu = document.getElementById("memberDropdownMenu");
    const btn = document.getElementById("memberStatusBtn");
    if (!menu) return;
    const isOpen = menu.style.display === "block";
    menu.style.display = isOpen ? "none" : "block";
    if (btn) btn.setAttribute("aria-expanded", String(!isOpen));
  }

  // ─── ADMIN MANAGEMENT ──────────────────────────────────────────────────────
  function openAdminModal() {
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
        errBox.textContent = "Incorrect master passcode. Try 5000.";
        errBox.style.display = "block";
      }
      pinInput.focus();
    }
  }

  function setPlanDuration(months) {
    selectedPlanMonths = months;
    const pills = document.querySelectorAll("#durationPills .duration-pill");
    pills.forEach(btn => {
      const m = parseInt(btn.getAttribute("data-months") || "0", 10);
      btn.classList.toggle("active", m === months);
    });
  }

  function handlePhoneAutoPin(phoneValue) {
    const pinInput = document.getElementById("newMemberPin");
    const clean = phoneValue.replace(/\D/g, "");
    if (clean.length >= 4 && pinInput && !pinInput.dataset.userEdited) {
      pinInput.value = clean.slice(-4);
    }
  }

  function handleAdminAddMember() {
    const nameInput = document.getElementById("newMemberName");
    const phoneInput = document.getElementById("newMemberPhone");
    const pinInput = document.getElementById("newMemberPin");
    if (!nameInput || !phoneInput || !pinInput) return;

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim().replace(/\D/g, "");
    let pin = pinInput.value.trim();

    if (!name) {
      alert("Please enter member full name.");
      nameInput.focus();
      return;
    }

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      phoneInput.focus();
      return;
    }

    if (!pin || pin.length !== 4) {
      pin = phone.slice(-4);
    }

    const startDate = new Date();
    const expiry = new Date();
    expiry.setMonth(expiry.getMonth() + selectedPlanMonths);

    const members = getMembersDB();
    const existingIndex = members.findIndex(m => m.phone === phone);

    const newMemberRecord = {
      phone,
      name,
      pin,
      startDate: startDate.toISOString().split("T")[0],
      expiryDate: expiry.toISOString().split("T")[0],
      durationMonths: selectedPlanMonths,
      status: "active"
    };

    if (existingIndex >= 0) {
      members[existingIndex] = newMemberRecord;
    } else {
      members.unshift(newMemberRecord);
    }

    saveMembersDB(members);

    // Reset inputs
    nameInput.value = "";
    phoneInput.value = "";
    pinInput.value = "";
    delete pinInput.dataset.userEdited;

    renderAdminDashboard();

    // If current logged-in user is updated, update header badge
    const session = getMemberSession();
    if (session && session.phone === phone) {
      saveMemberSession(newMemberRecord);
      renderMemberStatusHeader(newMemberRecord);
    }
  }

  function renewMember(phone, monthsToAdd) {
    const members = getMembersDB();
    const member = members.find(m => m.phone === phone);
    if (!member) return;

    const { isExpired } = calculateExpiry(member.expiryDate);
    const baseDate = isExpired ? new Date() : new Date(member.expiryDate);
    baseDate.setMonth(baseDate.getMonth() + monthsToAdd);

    member.expiryDate = baseDate.toISOString().split("T")[0];
    member.status = "active";
    member.durationMonths = (member.durationMonths || 0) + monthsToAdd;

    saveMembersDB(members);
    renderAdminDashboard();

    const session = getMemberSession();
    if (session && session.phone === phone) {
      saveMemberSession(member);
      renderMemberStatusHeader(member);
    }
  }

  function deleteMember(phone) {
    if (!confirm(`Revoke membership and access for ${phone}?`)) return;
    const members = getMembersDB().filter(m => m.phone !== phone);
    saveMembersDB(members);
    renderAdminDashboard();

    const session = getMemberSession();
    if (session && session.phone === phone) {
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
      const matchSearch =
        m.name.toLowerCase().includes(query) || m.phone.includes(query);
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

        return `
          <tr>
            <td class="cell-name"><strong>${m.name}</strong></td>
            <td class="cell-phone font-mono">+91 ${m.phone}</td>
            <td class="cell-pin font-mono">${m.pin}</td>
            <td class="cell-expiry">${formattedDate}</td>
            <td class="cell-days">${isExpired ? "0" : daysRemaining}</td>
            <td><span class="status-badge ${badgeClass}">${badgeText}</span></td>
            <td class="cell-renew">
              <div class="renew-btn-group">
                <button type="button" class="renew-pill-btn" onclick="NSCAuth.renewMember('${m.phone}', 1)" title="Add 1 Month">+1M</button>
                <button type="button" class="renew-pill-btn" onclick="NSCAuth.renewMember('${m.phone}', 3)" title="Add 3 Months">+3M</button>
                <button type="button" class="renew-pill-btn" onclick="NSCAuth.renewMember('${m.phone}', 6)" title="Add 6 Months">+6M</button>
              </div>
            </td>
            <td class="cell-actions">
              <button type="button" class="roster-delete-btn" onclick="NSCAuth.deleteMember('${m.phone}')" title="Revoke member access" aria-label="Delete ${m.name}">
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
    renderRosterTable
  };
})();
