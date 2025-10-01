import { isPasswordStrong, isPasswordMatch } from "./passwordValidation.js";

export function initRealtimeValidation() {
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmPasswordError");

    if (fullNameInput) {
        fullNameInput.addEventListener("input", () => {
            const error = document.getElementById("fullNameError");
            const val = fullNameInput.value.trim();
            const pattern = /^[A-Za-z\s]+$/;
            if (val && (val.length < 3 || !pattern.test(val))) {
                error.textContent = "Nama minimal 3 huruf dan hanya boleh huruf";
                error.classList.remove("hidden");
            } else {
                error.classList.add("hidden");
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener("input", () => {
            const error = document.getElementById("emailError");
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!pattern.test(emailInput.value.trim())) {
                error.textContent = "Email tidak valid";
                error.classList.remove("hidden");
            } else {
                error.classList.add("hidden");
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener("input", () => {
            const error = document.getElementById("phoneError");
            const digits = phoneInput.value.replace(/\D/g, "");
            if (digits.length > 0 && (digits.length < 9 || digits.length > 15)) {
                error.textContent = "Nomor HP harus 9–15 digit";
                error.classList.remove("hidden");
            } else {
                error.classList.add("hidden");
            }
        });
    }

    if (password) {
        password.addEventListener("input", () => {
            const val = password.value;
            if (!isPasswordStrong(val)) {
                passwordError.textContent = "Minimal 8 karakter, huruf besar, kecil, angka & simbol.";
                passwordError.classList.remove("hidden");
            } else {
                passwordError.classList.add("hidden");
            }
        });
    }

    if (password && confirm) {
        function validatePasswords() {
            if (confirm.value && !isPasswordMatch(password.value, confirm.value)) {
                confirmError.textContent = "Password tidak sama!";
                confirmError.classList.remove("hidden");
            } else {
                confirmError.classList.add("hidden");
            }
        }

        password.addEventListener("input", validatePasswords);
        confirm.addEventListener("input", validatePasswords);
    }
}

export function initRealtimeLoginValidation() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");

    if (!passwordInput || !passwordError) return;

    passwordInput.addEventListener("input", () => {
        const value = passwordInput.value.trim();
        if (value.length < 8) {
            passwordError.textContent = "Password minimal 8 karakter.";
            passwordError.classList.remove("hidden");
        } else {
            passwordError.classList.add("hidden");
        }
    });
}