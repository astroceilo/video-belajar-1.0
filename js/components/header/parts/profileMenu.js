export const profileMenu = `
<div class="hidden sm:block">
  <div class="relative w-10 h-10">
    <button
      type="button"
      id="profile-btn"
      class="overflow-hidden rounded-md shadow-inner cursor-pointer"
    >
      <span class="sr-only">Toggle dashboard menu</span>
      <img
        src="../../assets/images/profile/9.png"
        alt="User"
        class="size-10 object-cover"
      />
    </button>

    <!-- Menu Profile -->
    <div
      id="profile-menu"
      class="hidden absolute right-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg opacity-0 scale-95 transition-all duration-200 ease-out"
      role="menu"
    >
      <div class="p-2">
        <a
          href="#"
          class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
        >
          My profile
        </a>

        <div>
          <button
            type="button"
            class="logout-btn flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 cursor-pointer"
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
</div>
`;
