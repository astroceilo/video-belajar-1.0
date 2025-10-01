// JS Load Hamburger
export function initHamburger() {
    const btn = document.getElementById("hamburger-btn");
    const iconHamburger = document.getElementById("icon-hamburger");
    const iconClose = document.getElementById("icon-close");
    const menu = document.getElementById("mobile-menu");

    if (!btn) return;

    // Change position
    btn.addEventListener("click", () => {
        menu.classList.toggle("-translate-y-full");
        menu.classList.toggle("opacity-0");
        menu.classList.toggle("translate-y-0");
        menu.classList.toggle("opacity-100");
        menu.classList.toggle("pointer-events-none");

        iconHamburger.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");
    });
}
// End JS Load Hamburger