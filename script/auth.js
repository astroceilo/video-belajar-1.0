export function initPasswordToggle() {
    // Password Toggle
    document.querySelectorAll(".togglePassword").forEach((toggle) => {
        const wrapper = toggle.closest(".relative");
        const input = wrapper.querySelector("input");
        const icon = toggle.querySelector("i");

        toggle.addEventListener("click", () => {
            const type = input.type === "password" ? "text" : "password";
            input.type = type;

            if (type === "text") {
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            } else {
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            }
        });
    });
}

// Form Validation
export function attachFormValidation(formId, cardId, validateFn) {
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
        }
    });
}
