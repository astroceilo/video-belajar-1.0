import { initHamburger } from "./hamburger.js";
import { initCardMenu } from "./cardMenu.js";
import { initRating } from "./rating.js";
import { initFooter } from "./footer.js";
// import { initDropdown } from "./dropdown.js";
import { initLogin } from "./login.js";
import { initRegister } from "./register.js";


document.addEventListener("DOMContentLoaded", () => {
  initHamburger();
  initCardMenu();
  initRating();
  initFooter();
  // initDropdown();
  initLogin();
  initRegister();
});
