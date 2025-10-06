/**
 * Fungsi reusable untuk menampilkan alert (success, error, warning, info)
 * @param {string} type - Jenis alert ("success", "error", "warning", "info")
 * @param {string} title - Judul alert
 * @param {string} message - Pesan deskripsi alert
 * @param {number} duration - Lama tampil (ms)
 */
export function showAlert(type = "info", title = "Info", message = "", duration = "") {
    // Hapus alert lama kalau ada
    const existing = document.getElementById("dynamicAlert");
    if (existing) existing.remove();

    // 🎨 Warna & ikon berdasarkan tipe alert
    const colors = {
        success: { icon: successIcon("text-green-600") },
        error: { icon: errorIcon("text-red-600") },
        warning: { icon: warningIcon("text-yellow-500") },
        info: { icon: infoIcon("text-blue-600") },
    };

    const svg = colors[type] || colors.info;

    const alert = document.createElement("div");
    alert.id = "dynamicAlert";
    alert.role = "alert";
    alert.className = `
     rounded-lg bg-white p-4 shadow-2xl fixed z-50 
    top-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 
    opacity-0 max-w-md w-[90%]
  `;
    alert.innerHTML = `
    <div class="flex items-start gap-4">
      ${svg.icon}
      <div class="flex-1">
        <strong class="font-medium text-gray-900">${title}</strong>
        <p class="mt-0.5 text-sm text-gray-700">${message}</p>
      </div>
      <button id="closeAlertBtn" 
        class="-m-3 rounded-full p-1.5 text-gray-500 transition-colors 
        hover:bg-gray-50 hover:text-gray-700 cursor-pointer" 
        type="button" aria-label="Dismiss alert">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
          class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" 
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  `;

    document.body.appendChild(alert);

    // Fade in
    setTimeout(() => alert.classList.remove("opacity-0"), 20);

    // Auto hide
    const hide = () => {
        alert.classList.add("opacity-0");
        setTimeout(() => alert.remove(), 500);
    };
    setTimeout(hide, duration);

    // Tombol close
    alert.querySelector("#closeAlertBtn").addEventListener("click", hide);

    document.addEventListener("click", (e) => {
        // Cek apakah klik di luar alert
        if (!alert.contains(e.target)) {
            hide();
        }
    }, { once: true });
}

// ---- Ikon SVG ----
function successIcon(color) {
    return `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
    viewBox="0 0 24 24" stroke-width="1.5" 
    stroke="currentColor" class="size-6 ${color}">
    <path stroke-linecap="round" stroke-linejoin="round" 
      d="M9 12.75L11.25 15 15 9.75M21 12A9 9 0 113 12a9 9 0 0118 0z" />
  </svg>`;
}

function errorIcon(color) {
    return `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
    viewBox="0 0 24 24" stroke-width="1.5" 
    stroke="currentColor" class="size-6 ${color}">
    <path stroke-linecap="round" stroke-linejoin="round" 
      d="M6 18L18 6M6 6l12 12" />
  </svg>`;
}

function warningIcon(color) {
    return `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
    viewBox="0 0 24 24" stroke-width="1.5" 
    stroke="currentColor" class="size-6 ${color}">
    <path stroke-linecap="round" stroke-linejoin="round" 
      d="M12 9v3.75m0 3.75h.007v.008H12z" />
    <path stroke-linecap="round" stroke-linejoin="round" 
      d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
  </svg>`;
}

function infoIcon(color) {
    return `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
    viewBox="0 0 24 24" stroke-width="1.5" 
    stroke="currentColor" class="size-6 ${color}">
    <path stroke-linecap="round" stroke-linejoin="round" 
      d="M11.25 11.25h.008v3.75h-.008v-3.75zM11.25 7.5h.008v.008h-.008V7.5z" />
    <path stroke-linecap="round" stroke-linejoin="round" 
      d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
  </svg>`;
}