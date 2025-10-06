import { redirectIfLoggedIn } from "../utils/authGuard.js";
import { headerAuth } from "../components/header/auth.js";
import { initHomeLogo } from "../utils/homeLogo.js";
import { initPasswordToggle, attachFormValidation } from "../utils/auth.js";
import { initDropdown } from "../utils/dropdown.js";
import { initRealtimeValidation } from "../utils/realtimeValidation.js";
import { isPasswordStrong, isPasswordMatch } from "../utils/passwordValidation.js";

// export function initRegister() {

// Redirect to home if already logged in
redirectIfLoggedIn();

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.querySelector(".header");
    const form = document.getElementById("registerForm");
    if (!headerContainer || !form) return;

    headerContainer.innerHTML = headerAuth;

    initHomeLogo();
    initPasswordToggle();
    initDropdown(".gender-dropdown");
    initRealtimeValidation();

    // International Phone Input
    const phoneInput = document.querySelector("#phone");
    const fullPhone = document.querySelector("#fullPhone");
    let iti;

    if (window.intlTelInput) {
        // init plugin
        iti = window.intlTelInput(phoneInput, {
            initialCountry: "id", // default Indonesia
            separateDialCode: true,
            preferredCountries: ["id", "my", "sg", "us"],
            loadUtils: () =>
                import(
                    "https://cdn.jsdelivr.net/npm/intl-tel-input@25.11.2/build/js/utils.js"
                ),
        });
    } else {
        alert("Gagal memuat plugin nomor telepon. Periksa koneksi internetmu.");
    }

    // Update hidden input before submit
    phoneInput.form.addEventListener("submit", function () {
        if (iti) {
            fullPhone.value = iti.getNumber();
        }
    });

    // Register validation
    // Final check when submit
    attachFormValidation("registerForm", "registerCard", () => {
        const fullName = document.getElementById("fullName")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const gender = document.querySelector('input[name="gender"]')?.value.trim();
        const password = document.getElementById("password")?.value.trim();
        const confirmPassword = document.getElementById("confirmPassword")?.value.trim();
        const confirmPasswordError = document.getElementById("confirmPasswordError");

        let isValid = true;

        const nameRegex = /^[\p{L}\s]+$/u; // Unicode letters and spaces
        if (!fullName || fullName.length < 3 || !nameRegex.test(fullName)) {
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Simple email regex
        if (!email || !emailPattern.test(email)) {
            isValid = false;

            document.getElementById("email").value = "";
        }

        if (!gender) {
            isValid = false;
        }

        if (iti) {
            if (!iti.isValidNumber()) {
                isValid = false;
            } else {
                const fullPhone = document.getElementById("fullPhone");
                if (fullPhone) fullPhone.value = iti.getNumber(); // update hidden input
            }
        } else {
            isValid = false;
        }

        if (!isPasswordStrong(password) || !isPasswordMatch(password, confirmPassword)) {
            isValid = false;
        }

        // submit form if valid
        if (isValid) {
            // const formData = new FormData(form);
            // const data = Object.fromEntries(formData.entries());
            // console.log(data);

            // alert("Registrasi Berhasil ✅");
            // form.reset();
            window.location.href = "./login.html";
            return true;
        }

        return false;
    });
});
