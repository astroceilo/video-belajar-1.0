document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("navbar-container");

    // load navbar
    const res = await fetch("../components/navbar/navbar.html");
    const html = await res.text();
    container.innerHTML = html;

    // ambil elemen
    const guestNav = document.getElementById("guest-nav");
    const userNav = document.getElementById("user-nav");
    const logoutBtn = document.getElementById("logout-btn");
    const profileBtn = userNav?.querySelector("button");
    const dropdownMenu = userNav?.querySelector("div[role='menu']");

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        guestNav.classList.add("hidden");
        guestNav.classList.remove("md:flex");
        userNav.classList.remove("hidden");
    } else {
        guestNav.classList.remove("hidden");
        guestNav.classList.add("md:flex");
        userNav.classList.add("hidden");
    }

    // logout
    logoutBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("isLoggedIn", "false");
        guestNav.classList.remove("hidden");
        guestNav.classList.add("md:flex");
        userNav.classList.add("hidden");
    });

    // dropdown toggle
    if (profileBtn && dropdownMenu) {
        dropdownMenu.classList.add("hidden"); // awalnya disembunyiin
        profileBtn.addEventListener("click", () => {
            dropdownMenu.classList.toggle("hidden");
        });
    }
});
