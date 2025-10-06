export function initCardMenu() {
    function setActive(el, category) {
        // --- Handle underline ---
        document.querySelectorAll(".active-category").forEach((btn) => {
            btn.classList.remove("text-orange-600", "active-category");
            btn.classList.add("text-gray-600");
            let span = btn.querySelector("span");
            if (span) span.remove();
        });

        el.classList.add("text-orange-600", "active-category");
        el.classList.remove("text-gray-600");

        if (!el.querySelector("span")) {
            let underline = document.createElement("span");
            underline.className =
                "absolute left-0 -bottom-0 h-[4px] w-1/2 rounded-full bg-orange-600";
            el.appendChild(underline);
        }

        // --- Handle filter with animation ---
        const cards = document.querySelectorAll(".card [data-category]");
        cards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");

            if (category === "all" || cardCategory === category) {
                // Show with fade-in
                card.classList.remove("hidden");
                setTimeout(() => {
                    card.classList.remove("opacity-0", "scale-95");
                    card.classList.add("opacity-100", "scale-100");
                }, 10);
            } else {
                // Fade-out lalu hide
                card.classList.remove("opacity-100", "scale-100");
                card.classList.add("opacity-0", "scale-95");
                setTimeout(() => {
                    card.classList.add("hidden");
                }, 300); // sesuai duration-300
            }
        });
    }

    const buttons = document.querySelectorAll("[data-filter]");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-filter");
            setActive(btn, category);
        });
    });
}
