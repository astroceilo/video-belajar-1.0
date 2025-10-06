export function initProfileDropdown() {
    const btn = document.getElementById("profile-btn");
    const menu = document.getElementById("profile-menu");

    if (!btn || !menu) return;

    function openMenu() {
        menu.classList.remove("hidden");
        requestAnimationFrame(() => {
            menu.classList.remove("opacity-0", "scale-95");
            menu.classList.add("opacity-100", "scale-100");
        });
    }

    function closeMenu() {
        menu.classList.remove("opacity-100", "scale-100");
        menu.classList.add("opacity-0", "scale-95");
        setTimeout(() => {
            if (!menu.classList.contains("opacity-100")) {
                menu.classList.add("hidden");
            }
        }, 200);
    }

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (menu.classList.contains("hidden")) openMenu();
        else closeMenu();
    });

    // Klik luar menu -> close
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            closeMenu();
        }
    });
}

export function initProfileMobileDropdown() {
    // Profile Mobile Dropdown
    const profileBtnMobile = document.getElementById("profile-btn-mobile");
    const profileMenuContainer = document.getElementById("profile-menu-container");
    const profileMenuMobile = document.getElementById("profile-menu-mobile");
    const profileDivider = document.getElementById("profile-divider");

    if (!profileBtnMobile || !profileMenuContainer || !profileMenuMobile || !profileDivider) return;

    // slide + scale animation
    function openMenu() {
        profileMenuContainer.classList.remove("hidden");

        // Divider
        profileDivider.classList.remove("hidden", "opacity-0", "-translate-y-2");
        requestAnimationFrame(() => {
            profileDivider.classList.add("opacity-100", "translate-y-0");
        });

        // Menu
        profileMenuMobile.classList.remove("hidden", "opacity-0", "-translate-y-2", "pointer-events-none");
        requestAnimationFrame(() => {
            profileMenuMobile.classList.add("opacity-100", "translate-y-0");
        });
    }

    function closeMenu() {
        // Divider
        profileDivider.classList.remove("opacity-100", "translate-y-0");
        profileDivider.classList.add("opacity-0", "-translate-y-2");

        // Menu
        profileMenuMobile.classList.remove("opacity-100", "translate-y-0");
        profileMenuMobile.classList.add("opacity-0", "-translate-y-2", "pointer-events-none");

        setTimeout(() => {
            profileMenuContainer.classList.add("hidden");
            profileDivider.classList.add("hidden");
            profileMenuMobile.classList.add("hidden");
        }, 200);
    }

    profileBtnMobile.addEventListener("click", (e) => {
        e.stopPropagation();
        if (profileMenuContainer.classList.contains("hidden")) openMenu();
        else closeMenu();
    });

    // optional: klik di luar dropdown buat nutup
    document.addEventListener("click", (e) => {
        if (!profileMenuContainer.contains(e.target) && !profileBtnMobile.contains(e.target)) {
            closeMenu();
        }
    });
}

export function resetProfileMenu() {
    const profileMenuContainer = document.getElementById("profile-menu-container");
    const profileDivider = document.getElementById("profile-divider");
    const profileMenuMobile = document.getElementById("profile-menu-mobile");

    if (profileMenuContainer && profileDivider && profileMenuMobile) {
        profileMenuContainer.classList.add("hidden");

        profileDivider.classList.add("hidden", "opacity-0", "-translate-y-2");
        profileDivider.classList.remove("opacity-100", "translate-y-0");

        profileMenuMobile.classList.add("hidden", "opacity-0", "-translate-y-2", "pointer-events-none");
        profileMenuMobile.classList.remove("opacity-100", "translate-y-0");
    }
}

