export const hamburger = `
<div>
  <button
    id="hamburger-btn"
    class="sm:hidden w-10 h-10 flex items-center justify-center"
  >
    <!-- Icon Hamburger -->
    <svg
      id="icon-hamburger"
      class="w-8 h-8 text-gray-800"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>

    <!-- Icon X -->
    <svg
      id="icon-close"
      class="w-8 h-8 text-gray-800 hidden"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  <!-- Hamburger Menu -->
  <div
    id="mobile-menu"
    class="absolute top-full left-0 right-0 z-20 bg-white/80 backdrop-blur-md flex flex-col px-6 py-4 transform -translate-y-full opacity-0 pointer-events-none transition-all duration-500 ease-in-out sm:hidden shadow-md"
  >
    <!-- Nav Item -->
    <ul class="flex flex-col gap-6 text-lg font-medium">
      <li>
        <a href="#" class="text-gray-600 hover:text-[rgba(62,207,76,1)]"
          >Kategori</a
        >
      </li>
      <li class="relative">
        <!-- Profile Dropdown (mobile) -->
        <div class="block sm:hidden">
          <div id="profile-btn-mobile" class="flex gap-2 items-center">
            <button
              type="button"
              class="overflow-hidden rounded-md shadow-inner cursor-pointer"
            >
              <span class="sr-only">Toggle profile menu</span>
              <img
                src="../../assets/images/profile/9.png"
                alt="User"
                class="size-10 object-cover"
              />
            </button>
            <p>Doni Anggara</p>
          </div>

          <!-- Menu Profile -->
          <div
            id="profile-menu-container"
            class="hidden mt-4 w-full transition-all"
          >
            <!-- Divider -->
            <hr
              id="profile-divider"
              class="border-t border-gray-400 my-2 opacity-0 -translate-y-2 transition-all duration-300 ease-in-out hidden"
            />

            <div
              id="profile-menu-mobile"
              class="hidden ml-6 transition-all duration-300 ease-in-out -translate-y-10 opacity-0 pointer-events-none"
              role="menu"
            >
              <div class="p-2">
                <a
                  href="#"
                  class="block rounded-lg px-4 py-2 text-base text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  My profile KONTOL
                </a>

                <button
                  type="button"
                  class="logout-btn flex w-full items-center gap-2 rounded-lg px-4 py-2 text-base text-red-700 hover:bg-red-50 cursor-pointer"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <!-- End Menu Profile -->
        </div>
        <!-- End Profile Dropdown -->
      </li>
    </ul>
    <!-- End Nav Item -->
  </div>
  <!-- End Hamburger Menu -->
</div>
`;
