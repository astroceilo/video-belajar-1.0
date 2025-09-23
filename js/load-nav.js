async function loadNav(path, state = "guest") {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Navbar gagal dimuat");

    const html = await res.text();
    document.getElementById("navbar").innerHTML = html;

    // Hanya kalau pakai navbar.html → apply logic
    if (path.includes("../components/navbar/navbar.html")) {
      const guestNav = document.getElementById("nav-guest");
      const userNav = document.getElementById("nav-user");
      const menuNav = document.getElementById("nav-menu");

      if (state === "guest") {
        guestNav.classList.remove("hidden");
        userNav.classList.add("hidden");
        menuNav.classList.remove("hidden");
      } else if (state === "user") {
        guestNav.classList.add("hidden");
        userNav.classList.remove("hidden");
        menuNav.classList.remove("hidden");
      } else if (state === "auth") {
        guestNav.classList.add("hidden");
        userNav.classList.add("hidden");
        menuNav.classList.add("hidden");
      }
    }
  } catch (err) {
    console.error(err);
    document.getElementById("navbar").innerHTML =
      `<div class="bg-red-100 text-red-600 p-4">Gagal memuat navbar</div>`;
  }
}
