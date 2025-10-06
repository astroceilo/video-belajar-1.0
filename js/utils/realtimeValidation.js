import { isPasswordStrong, isPasswordMatch } from "./passwordValidation.js";

export function initRealtimeValidation() {
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");

    if (fullNameInput) {
        fullNameInput.addEventListener("input", () => {
            const error = document.getElementById("fullNameError");
            const val = fullNameInput.value.trim();
            const nameRegex = /^[\p{L}\s]+$/u; // Unicode letters and spaces
            if (val.length < 3) {
                error.textContent = "Nama minimal 3 karakter.";
                error.classList.remove("hidden");
            } else if (!nameRegex.test(val)) {
                error.textContent = "Nama hanya boleh berisi huruf dan spasi.";
                error.classList.remove("hidden");
            } else {
                error.classList.add("hidden");
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener("input", () => {
            const error = document.getElementById("emailError");
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                error.textContent = "Email tidak valid. Contoh: nama@domain.com";
                error.classList.remove("hidden");
            } else {
                error.classList.add("hidden");
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener("input", () => {
            // clean input, just allow digits and +
            phoneInput.value = phoneInput.value.replace(/[^0-9+]/g, "");

            const error = document.getElementById("phoneError");
            const digits = phoneInput.value.replace(/\D/g, "");
            if (digits.length === 0) {
                error.classList.add("hidden");
            } else if (digits.length < 9) {
                error.textContent = "Nomor HP terlalu pendek (minimal 9 digit)";
                error.classList.remove("hidden");
            } else if (digits.length > 15) {
                error.textContent = "Nomor HP terlalu panjang (maksimal 15 digit)";
                error.classList.remove("hidden");
            } else {
                error.classList.add("hidden");
            }
        });
    }

    if (password) {
        password.addEventListener("input", () => {
            const passwordError = document.getElementById("passwordError");
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
            const confirmError = document.getElementById("confirmPasswordError");
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