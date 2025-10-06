import { showAlert } from "./alert.js";
import { redirectToHome } from "./redirected.js";

export function logout() {
    const alertData = {
        type: "warning",
        title: "Anda telah Logout",
        message: "Sampai jumpa lagi, silakan login ulang.",
        duration: 5000
    };
    localStorage.setItem("pendingAlert", JSON.stringify(alertData));

    localStorage.removeItem("isLoggedIn");
    redirectToHome();
}

export function initLogoutButton() {
    document.querySelectorAll(".logout-btn").forEach(btn => {
        btn.addEventListener("click", logout);
    });
}

export function initAutoLogout(timeoutMs = 60000) {
    if (localStorage.getItem("isLoggedIn") !== "true") return;

    let timer;

    const resetTimer = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const alertData = {
                type: "warning",
                title: "Kamu telah logout",
                message: "Sesi kamu habis, silakan login ulang.",
                duration: 30000
            };
            localStorage.setItem("pendingAlert", JSON.stringify(alertData));

            localStorage.removeItem("isLoggedIn");
            redirectToHome();
        }, timeoutMs);
    };

    ["mousemove", "keydown", "click", "scroll", "touchstart"].forEach(evt => {
        window.addEventListener(evt, resetTimer);
    });

    resetTimer();
}
