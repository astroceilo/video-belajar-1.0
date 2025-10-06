import { headerGuest } from "../components/header/guest.js";
import { headerUser } from "../components/header/user.js";
import { courseCard } from "../components/cards/courseCard.js";
import { footer } from "../components/footer/footer.js";
import { initHomeLogo } from "../utils/homeLogo.js";
import { initHamburger } from "../utils/hamburger.js";
import { initProfileDropdown, initProfileMobileDropdown } from "../utils/profileDropdown.js";
import { showAlert } from "../utils/alert.js";
import { initCardMenu } from "../utils/cardMenu.js";
import { initRating } from "../utils/rating.js";
import { initFooterDropdown } from "../utils/footerDropdown.js";
import { initLogoutButton, initAutoLogout } from "../utils/logout.js";

function showOverlayWithAlert(type, title, message, duration = 5000) {
    const overlay = document.getElementById("loginOverlay");
    if (!overlay) return;

    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.remove("opacity-0"), 10);

    showAlert(type, title, message, duration);

    const hideOverlay = () => {
        overlay.classList.add("opacity-0");
        setTimeout(() => overlay.classList.add("hidden"), 500);
    };

    // Auto-hide overlay
    setTimeout(hideOverlay, duration);

    // Klik tombol close atau area overlay
    document.addEventListener("click", (e) => {
        if (e.target.closest("#closeAlertBtn")) hideOverlay();
    });
    overlay.addEventListener("click", hideOverlay);
}

document.addEventListener("DOMContentLoaded", () => {
    // Element container for header dan footer
    const headerContainer = document.querySelector(".header");
    const footerContainer = document.getElementById("footer");

    // Cek status login from localStorage
    const overlay = document.getElementById("loginOverlay");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const loginSuccess = localStorage.getItem("loginSuccess") === "true";

    if (isLoggedIn) {
        headerContainer.innerHTML = headerUser;
    } else {
        headerContainer.innerHTML = headerGuest;
    }

    footerContainer.innerHTML = footer;

    // Initialize components
    initHomeLogo();
    initHamburger();
    initCardMenu();
    initRating();
    initFooterDropdown();
    loadData();

    // login success alert
    if (loginSuccess) {
        showOverlayWithAlert("success", "Login Berhasil", "Selamat datang kembali dan selamat berbelanja!", 5000);
        localStorage.removeItem("loginSuccess");
    }

    const pending = localStorage.getItem("pendingAlert");
    if (pending) {
        const { type, title, message, duration } = JSON.parse(pending);
        if (type === "info" || type === "warning") {
            // Logout / Auto logout → pakai overlay juga
            showOverlayWithAlert(type, title, message, duration);
        } else {
            showAlert(type, title, message, duration);
        }
        localStorage.removeItem("pendingAlert");
    }


    // Show dropdown profile if user is logged in
    if (isLoggedIn) {
        initProfileDropdown();
        initProfileMobileDropdown();
        initLogoutButton();
        initAutoLogout(60000); // 1 minute
    }
});

// Load courses
async function loadData() {
    const container = document.getElementById('courses-container');
    if (!container) {
        console.warn("Element #courses-container tidak ditemukan di halaman ini.");
        return;
    }

    const usersResp = await fetch('/data/users.json');
    const users = await usersResp.json();

    const coursesResp = await fetch('/data/courses.json');
    const courses = await coursesResp.json();

    container.innerHTML = courses.map(course => {
        const instructor = users.find(u => u.id === course.instructor_id) || {};
        return courseCard({ ...course, instructor });
    }).join('');
}
