export function redirectToHome() {
    const currentPath = window.location.pathname;

    // kalau halaman berada di dalam subfolder (misal /pages/detail/)
    if (currentPath.includes("/detail/") || currentPath.includes("/auth/")) {
        window.location.href = "../index.html";
    }
    // kalau file ini di root /pages/
    else {
        window.location.href = "./index.html";
    }
}