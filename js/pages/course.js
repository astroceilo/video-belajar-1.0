import { headerCourse } from "../components/header/course.js";
import { footer } from "../components/footer/footer.js";
import { initHomeLogo } from "../utils/homeLogo.js";
import { initCourseHeader, updateProgress } from "../utils/courseHeader.js";
import { initHamburger } from "../utils/hamburger.js";
import { initProfileDropdown, initProfileMobileDropdown } from "../utils/profileDropdown.js";
import { initFooterDropdown } from "../utils/footerDropdown.js";
import { initLogoutButton, initAutoLogout } from "../utils/logout.js";


document.addEventListener("DOMContentLoaded", () => {
  // Element container for header dan footer
  const headerContainer = document.querySelector(".header");
  const footerContainer = document.getElementById("footer");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Cek status login from localStorage
  if (isLoggedIn) {
    headerContainer.innerHTML = headerCourse;
  } else {
    window.location.href = "../auth/login.html";
  }

  footerContainer.innerHTML = footer;

  // Initialize components
  initHomeLogo();
  initCourseHeader();
  // contoh dummy update progress (nanti bisa pakai data dari backend)
  updateProgress(12, 12);
  initHamburger();
  initFooterDropdown();

  if (isLoggedIn) {
    initProfileDropdown();
    initProfileMobileDropdown();
    initLogoutButton();
    initAutoLogout(60000); // 1 minute
  }
});
