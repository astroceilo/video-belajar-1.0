export function initDropdown(className) {
    const wrappers = document.querySelectorAll(className);
    if (!wrappers.length) return;

    wrappers.forEach((wrapper) => {
        const btn = wrapper.querySelector(".dropdown-btn");
        const menu = wrapper.querySelector(".dropdown-menu");
        const selected = wrapper.querySelector(".dropdown-selected");
        const hiddenInput = wrapper.querySelector(".dropdown-value");
        const arrow = wrapper.querySelector(".dropdown-arrow");

        if (!btn || !menu || !arrow) return; // safety

        function openMenu() {
            // show + animate in
            menu.classList.remove("hidden", "opacity-0", "scale-95");
            requestAnimationFrame(() => {
                menu.classList.remove("opacity-0", "scale-95");
                menu.classList.add("opacity-100", "scale-100");
            });
            arrow?.classList.add("rotate-180");
        }

        function closeMenu() {
            // animate out then hide after animation duration (200ms)
            menu.classList.remove("opacity-100", "scale-100");
            menu.classList.add("opacity-0", "scale-95");
            setTimeout(() => menu.classList.add("hidden"), 200);
            arrow?.classList.remove("rotate-180");
        }

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (menu.classList.contains("hidden")) openMenu();
            else closeMenu();
        });

        menu.querySelectorAll("li, a").forEach((item) => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                e.preventDefault();

                if (selected) selected.textContent = item.textContent;
                if (hiddenInput) hiddenInput.value = item.dataset.value ?? item.textContent;

                closeMenu();
            });
        });

        // Click outside -> close
        document.addEventListener("click", (e) => {
            if (!wrapper.contains(e.target)) {
                closeMenu();
            }
        });
    });
}
