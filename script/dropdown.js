export function initDropdown(wrapperId) {
    const wrappers = wrapperId
        ? [document.getElementById(wrapperId)]
        : document.querySelectorAll("[data-dropdown]");

    wrappers.forEach((wrapper) => {
        if (!wrapper) return;

        const btn = wrapper.querySelector(".dropdown-btn");
        const menu = wrapper.querySelector(".dropdown-menu");
        const selected = wrapper.querySelector(".dropdown-selected");
        const hiddenInput = wrapper.querySelector(".dropdown-value");

        // Pastikan default state di HTML: invisible opacity-0 scale-95
        // Example: class="dropdown-menu absolute invisible opacity-0 scale-95 transition transform duration-200 ..."

        // Toggle menu
        btn.addEventListener("click", (e) => {
            e.stopPropagation();

            if (menu.classList.contains("invisible")) {
                // SHOW
                menu.classList.remove("invisible", "opacity-0", "scale-95");
                menu.classList.add("opacity-100", "scale-100");
            } else {
                // HIDE
                closeMenu();
            }
        });

        // Pilih item
        menu.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", () => {
                selected.textContent = item.textContent;
                hiddenInput.value = item.dataset.value;
                closeMenu();
            });
        });

        // Klik di luar -> close
        document.addEventListener("click", (e) => {
            if (!wrapper.contains(e.target)) {
                closeMenu();
            }
        });

        function closeMenu() {
            if (!menu.classList.contains("invisible")) {
                menu.classList.remove("opacity-100", "scale-100");
                menu.classList.add("opacity-0", "scale-95");
                setTimeout(() => {
                    menu.classList.add("invisible");
                }, 200); // sesuai durasi transition
            }
        }
    });
}