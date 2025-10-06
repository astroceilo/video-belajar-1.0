import { profileMenu } from "./parts/profileMenu.js";
import { hamburger } from "./parts/hamburger.js";

export const headerUser = `
<div class="mx-auto max-w-screen-xl px-4 py-3 md:px-6 lg:px-8">
  <div class="flex h-20 items-center justify-between">
    <!-- Logo -->
    <div class="flex-1 flex items-center md:gap-12">
      <a class="home-logo flex text-[rgba(62,207,76,1)] cursor-pointer" href="../index.html">
        <img src="../../assets/images/logo.png" alt="Logo" />
      </a>
    </div>
    <!-- End Logo -->

    <div class="flex items-center gap-3 sm:gap-6">
      <!-- Menu Item -->
      <nav aria-label="Global" class="hidden sm:block">
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <a
              class="text-gray-500 font-medium transition hover:text-gray-500/75"
              href="#categories"
            >
              Kategori
            </a>
          </li>
        </ul>
      </nav>
      <!-- End Menu Item -->

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
