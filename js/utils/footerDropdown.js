// JS Load Footer
export function initFooterDropdown() {
    function toggleFooterMenu(id, btn) {
        const el = document.getElementById(id);

        if (el.classList.contains("max-h-0")) {
            el.classList.remove("max-h-0");
            el.classList.add("max-h-screen");
            btn.classList.add("open");
        } else {
            el.classList.remove("max-h-screen");
            el.classList.add("max-h-0");
            btn.classList.remove("open");
        }
    }

    const footerButtons = document.querySelectorAll(".footer-toggle");

    footerButtons.forEach((btn) => {
        const targetId = btn.getAttribute("data-target"); // id konten yang mau ditoggle
        btn.addEventListener("click", () => {
            toggleFooterMenu(targetId, btn);
        });
    });
}
// End JS Load Footer