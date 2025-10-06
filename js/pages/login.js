import { redirectIfLoggedIn } from "../utils/authGuard.js";
import { headerAuth } from "../components/header/auth.js";
import { initHomeLogo } from "../utils/homeLogo.js";
import { initPasswordToggle, attachFormValidation } from "../utils/auth.js";
import { initRealtimeValidation, initRealtimeLoginValidation } from "../utils/realtimeValidation.js";
import { showAlert } from "../utils/alert.js";

// export function initLogin() {

// Redirect to home if already logged in
redirectIfLoggedIn();

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector(".header");
    const form = document.getElementById("loginForm");

    if (!headerContainer || !form) return;

    headerContainer.innerHTML = headerAuth;

    initHomeLogo();
    initPasswordToggle();
    initRealtimeValidation();
    initRealtimeLoginValidation();

    // Untuk Login
    attachFormValidation("loginForm", "loginCard", () => {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const email = emailInput?.value.trim();
        const password = passwordInput?.value.trim();

        const dummyEmail = "test@test.com";
        const dummyPassword = "password";

        // Reset alert
        // if (errorAlert) errorAlert.classList.add("hidden");

        // Empty validation
        if (!email || !password) {
            showAlert("error", "Validasi Gagal", "Email dan password wajib diisi!", 4000);

            emailInput.focus();
            return false;
        }

        // Email cant be found
        if (email !== dummyEmail) {
            showAlert("error", `Email "${email}" tidak terdaftar.`, "Silahkan daftar terlebih dahulu!", 4000);

            emailInput.value = "";
            passwordInput.value = "";
            emailInput.focus();
            return false;
        }

        // Password not match
        if (password !== dummyPassword) {
            showAlert("error", "Password yang kamu masukkan tidak sesuai.", "Silahkan coba lagi!", 4000);

            passwordInput.value = "";
            passwordInput.focus();
            return false;
        }

        // const formData = new FormData(form);
        // const data = Object.fromEntries(formData.entries());
        // console.log(data);

        // alert("Login Berhasil ✅");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loginSuccess", "true");
        // form.reset();
        window.location.href = "../index.html";
        return true;
    });
});
