import { profileMenu } from "./parts/profileMenu.js";
import { courseActions } from "./parts/courseActions.js";
import { hamburger } from "./parts/hamburger.js";

export const headerCourse = `
<div class="mx-auto max-w-screen-xl px-4 py-3 md:px-6 lg:px-8">
  <div class="flex h-20 items-center justify-between gap-6 sm:gap-3">
    <!-- Back Button + Title -->
    <div class="flex items-center gap-3 min-w-0">
      <!-- Icon Back -->
      <a
        class="home-logo flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
        href="index.html"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12l7.5-7.5M21 12H3"
          />
        </svg>
        <span class="ml-2 truncate block font-normal sm:overflow-auto sm:font-medium flex-1 max-w-[150px] sm:max-w-[200px] md:max-w-full"
          >Foundations of User Experience Design</span
        >
      </a>
    </div>

    <div
      class="course-header flex items-center justify-end w-full gap-3 sm:gap-6"
      
    >
      <!-- Course Actions -->
      ${courseActions}
      <!-- End Course Actions -->

      <!-- Profile Dropdown -->
      ${profileMenu}
      <!-- End Profile Dropdown -->
    </div>

    <!-- Hamburger -->
    ${hamburger}
    <!-- End Hamburger -->
  </div>
</div>
`;
