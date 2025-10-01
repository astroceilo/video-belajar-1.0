import { initPasswordToggle, attachFormValidation } from "./auth.js";
import { initRealtimeValidation, initRealtimeLoginValidation } from "./realtimeValidation.js";
import { showErrorAlert } from "./utils/alert.js";

export function initLogin() {
    const form = document.getElementById("loginForm");
    if (!form) return;

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
            showErrorAlert("Validasi Gagal", "Email dan password wajib diisi!");

            emailInput.focus();
            return false;
        }

        // Email cant be found
        if (email !== dummyEmail) {
            showErrorAlert("Email Tidak Ditemukan", `Email "${email}" tidak terdaftar.`);

            emailInput.value = "";
            passwordInput.value = "";
            emailInput.focus();
            return false;
        }

        // Password not match
        if (password !== dummyPassword) {
            showErrorAlert("Password Salah", "Password yang kamu masukkan tidak sesuai.");

            passwordInput.value = "";
            passwordInput.focus();
            return false;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        // alert("Login Berhasil ✅");
        localStorage.setItem("loginSuccess", "true");
        // form.reset();
        window.location.href = "../guest/index.html";
        return true;
    });
}
