export function redirectIfLoggedIn(redirectTo = "../index.html") {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
        window.location.href = redirectTo;
    }
}
