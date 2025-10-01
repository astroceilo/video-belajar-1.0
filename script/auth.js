export function initAuth() {
    // Password Toggle
    document.querySelectorAll(".togglePassword").forEach((toggle) => {
        const input = toggle.previousElementSibling;
        const icon = toggle.querySelector("i");

        toggle.addEventListener("click", () => {
            const type = input.getAttribute("type") === "password" ? "text" : "password";
            input.setAttribute("type", type);

            if (type === "text") {
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            } else {
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            }
        });
    });

    // Form Validation
    function attachFormValidation(formId, cardId, validateFn) {
        const form = document.getElementById(formId);
        const card = document.getElementById(cardId);

        if (!form) return;

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const result = validateFn();

            if (!result) {
                // animasi shake
                card.animate(
                    [
                        { transform: "translateX(0)" },
                        { transform: "translateX(-8px)" },
                        { transform: "translateX(8px)" },
                        { transform: "translateX(-8px)" },
                        { transform: "translateX(8px)" },
                        { transform: "translateX(0)" },
                    ],
                    {
                        duration: 400,
                        iterations: 1,
                    }
                );
            } else {
                alert("Berhasil 🚀");
            }
        });
    }

    // Untuk Login
    attachFormValidation("loginForm", "loginCard", () => {
        const email = document.getElementById("email")?.value.trim();
        const password = document.getElementById("password")?.value.trim();
        return email === "test@test.com" && password === "1234";
    });

    // Untuk Register
    attachFormValidation("registerForm", "registerCard", () => {
        const email = document.getElementById("regEmail")?.value.trim();
        const pass = document.getElementById("regPassword")?.value.trim();
        const confirm = document.getElementById("confirmPassword")?.value.trim();

        if (!email || !pass || !confirm) return false;
        if (pass !== confirm) {
            alert("Password tidak sama!");
            return false;
        }
        return true;
    });
}
