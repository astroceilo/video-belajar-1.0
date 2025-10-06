import { redirectToHome } from "./redirected.js";

export function initHomeLogo() {
    const logo = document.querySelector(".home-logo");
    if (!logo) return;

    logo.addEventListener("click", (e) => {
        e.preventDefault();
        redirectToHome();
    });
}
