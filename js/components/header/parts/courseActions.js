export const courseActions = `
<div class="progress flex items-center gap-4">
  <div class="hidden sm:block w-28 bg-[rgba(255,247,215,0.8)] h-2 rounded-full overflow-hidden">
    <div
      id="progress-bar"
      class="bg-[rgba(255,189,58,1)] h-full w-[0%] transition-all duration-300"
    ></div>
  </div>
  <span id="progress-text" class="text-green-600 font-semibold">0/0</span>
</div>

<div class="certificate certificate-dropdown relative">
  <button
    class="dropdown-btn flex items-center gap-2 border border-green-500 text-green-600 px-3 py-1.5 rounded-xl hover:bg-green-50 transition cursor-pointer"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2H14V0H4V2H2C0.9 2 0 2.9 0 4V5C0 7.55 1.92 9.63 4.39 9.94C5.02 11.44 6.37 12.57 8 12.9V16H4V18H14V16H10V12.9C11.63 12.57 12.98 11.44 13.61 9.94C16.08 9.63 18 7.55 18 5V4C18 2.9 17.1 2 16 2ZM2 5V4H4V7.82C2.84 7.4 2 6.3 2 5ZM16 5C16 6.3 15.16 7.4 14 7.82V4H16V5Z"
        fill="#FFBD3A"
      />
    </svg>
    <span class="dropdown-selected font-bold hidden sm:block"
      >Ambil Sertifikat</span
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="dropdown-arrow w-4 h-4 transform transition-transform duration-200"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <!-- Dropdown Menu Sertifikat -->
  <div
    class="dropdown-menu hidden absolute right-0 mt-2 w-56 p-2 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 scale-95 transition-all duration-200 ease-out"
  >
    <a
      href="#"
      class="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
      >Download PDF</a
    >
    <a
      href="#"
      class="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
      >Lihat Sertifikat</a
    >
  </div>
</div>
`;
