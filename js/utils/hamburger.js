import { resetProfileMenu } from "./profileDropdown.js";

export function initHamburger() {
    const btn = document.getElementById("hamburger-btn");
    const iconHamburger = document.getElementById("icon-hamburger");
    const iconClose = document.getElementById("icon-close");
    const menu = document.getElementById("mobile-menu");

    if (!btn) return;

    const toggleMenu = () => {
        const isOpen = !menu.classList.contains("-translate-y-full");

        menu.classList.toggle("-translate-y-full");
        menu.classList.toggle("opacity-0");
        menu.classList.toggle("translate-y-0");
        menu.classList.toggle("opacity-100");
        menu.classList.toggle("pointer-events-none");

        iconHamburger.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");

        if (isOpen) {
            resetProfileMenu();
        }
    };

    // Change position
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", (e) => {
        const isClickInside = menu.contains(e.target) || btn.contains(e.target);

        if (!isClickInside && !menu.classList.contains("-translate-y-full")) {
            toggleMenu();
        }
    });
}
