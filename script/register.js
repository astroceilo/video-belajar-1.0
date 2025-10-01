import { initPasswordToggle, attachFormValidation } from "./auth.js";
import { initDropdown } from "./dropdown.js";
import { initRealtimeValidation } from "./realtimeValidation.js";
import { isPasswordStrong, isPasswordMatch } from "./passwordValidation.js";

export function initRegister() {
    const form = document.getElementById("registerForm");
    if (!form) return;

    initPasswordToggle();
    initDropdown("dropdown-gender");
    initDropdown("dropdown-country");
    initRealtimeValidation();

    // International Phone Input
    const phoneInput = document.querySelector("#phone");
    const fullPhone = document.querySelector("#fullPhone");
    const iti = window.intlTelInput(phoneInput, {
        initialCountry: "id", // default Indonesia
        separateDialCode: true,
        preferredCountries: ["id", "my", "sg", "us"],
        loadUtils: () =>
            import(
                "https://cdn.jsdelivr.net/npm/intl-tel-input@25.11.2/build/js/utils.js"
            ),
    });

    // Update hidden input before submit
    phoneInput.form.addEventListener("submit", function () {
        fullPhone.value = iti.getNumber();
    });

    // Register validation
    attachFormValidation("registerForm", "registerCard", () => {
        const fullName = document.getElementById("fullName")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const gender = document.querySelector('input[name="gender"]')?.value.trim();
        const phone = document.getElementById("phone")?.value.trim();
        const password = document.getElementById("password")?.value.trim();
        const confirmPassword = document.getElementById("confirmPassword")?.value.trim();
        const confirmPasswordError = document.getElementById("confirmPasswordError");

        let isValid = true;

        if (!fullName || fullName.length < 3) {
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            isValid = false;

            document.getElementById("email").value = "";
        }

        if (!gender) {
            isValid = false;
        }

        const phoneDigits = phone.replace(/\D/g, "");
        if (!phoneDigits || phoneDigits.length < 9 || phoneDigits.length > 15) {
            isValid = false;

            document.getElementById("phone").value = "";
        }

        if (!isPasswordStrong(password)) {
            isValid = false;
        }

        if (!isPasswordMatch(password, confirmPassword)) {
            isValid = false;
            confirmPasswordError.classList.remove("hidden");
        } else {
            confirmPasswordError.classList.add("hidden");
        }

        if (isValid) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log(data);

            alert("Registrasi Berhasil ✅");
            // form.reset();
            window.location.href = "./login.html";
            return true;
        }

        return false;
    });
}
