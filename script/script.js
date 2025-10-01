import { initHamburger } from "./hamburger.js";
import { initCardMenu } from "./cardMenu.js";
import { initRating } from "./rating.js";
import { initFooter } from "./footer.js";
import { initAuth } from "./auth.js";
// import { initDropdown } from "./dropdown.js";


document.addEventListener("DOMContentLoaded", () => {
  initHamburger();
  initCardMenu();
  initRating();
  initFooter();
  initAuth();
  // initDropdown();
});
