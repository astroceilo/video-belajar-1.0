export function showErrorAlert(title, message, duration = 2000) {
    const errorAlert = document.getElementById("loginError");
    if (!errorAlert) return;

    const errorTitle = errorAlert.querySelector("strong");
    const errorDesc = errorAlert.querySelector("p");

    // Update teks
    if (errorTitle) errorTitle.textContent = title || "Terjadi Kesalahan";
    if (errorDesc) errorDesc.textContent = message || "Silakan coba lagi.";

    // Reset animasi jika alert sedang muncul
    if (errorAlert.fadeTimeout) {
        clearTimeout(errorAlert.fadeTimeout);
        errorAlert.classList.add("opacity-0");
        setTimeout(() => errorAlert.classList.add("hidden"), 500);
    }

    // Tampilkan alert dengan fade-in
    errorAlert.classList.remove("hidden");
    setTimeout(() => errorAlert.classList.remove("opacity-0"), 10);

    // Sembunyikan alert otomatis setelah duration
    errorAlert.fadeTimeout = setTimeout(() => {
        errorAlert.classList.add("opacity-0");
        setTimeout(() => errorAlert.classList.add("hidden"), 500);
        errorAlert.fadeTimeout = null; // reset reference
    }, duration);
}
