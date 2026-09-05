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

const ADMIN_MASTER_PIN = "2461";

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

  // ─── EXPIRY CALCULATOR ─────────────────────────────────────────────────────
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

  // ─── UI & MODAL MANAGEMENT ─────────────────────────────────────────────────
  function init() {
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

    // Check if member is still in database and fresh expiry status
    const currentMember = members.find(m => m.phone === session.phone);
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

    const rawPhone = phoneInput.value.trim().replace(/\D/g, "");
    const rawPin = pinInput.value.trim();

    if (rawPhone.length !== 10 || rawPin.length !== 4) {
      showAuthAlert("Please enter valid 10-digit phone and 4-digit PIN.");
      return;
    }

    const members = getMembersDB();
    const member = members.find(m => m.phone === rawPhone);

    if (!member) {
      showAuthAlert("Mobile number not found in register.");
      return;
    }

    if (member.pin !== rawPin) {
      showAuthAlert("Incorrect PIN.");
      pinInput.focus();
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
    if (pillName) pillName.textContent = member.name.split(" ")[0]; // First name for header
    if (dropName) dropName.textContent = member.name;
    if (dropPhone) dropPhone.textContent = `+91 ${member.phone}`;

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

  // ─── ADMIN MANAGEMENT PORTAL ───────────────────────────────────────────────
  function setupAdminAutoTrigger() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("admin") === "true") {
      openAdminModal();
    }
  }

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

    if (!name || phone.length !== 10) {
      alert("Please enter valid name and 10-digit phone.");
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
        alert("Please select a valid custom expiry date.");
        if (customDateInput) customDateInput.focus();
        return;
      }
      expiryDateStr = customDateInput.value;
      const chosen = new Date(expiryDateStr + "T23:59:59");
      if (isNaN(chosen.getTime())) {
        alert("Invalid custom expiry date format.");
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
    const existingIndex = members.findIndex(m => m.phone === phone);

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
