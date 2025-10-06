import { initDropdown } from "../utils/dropdown.js";

export function initCourseHeader() {
    const courseHeaders = document.querySelectorAll(".course-header");

    courseHeaders.forEach((course) => {
        const isCompleted = course.dataset.completed === "true";
        const progress = course.querySelector(".progress");
        const certificate = course.querySelector(".certificate");

        if (isCompleted) {
            progress.classList.add("hidden");
            certificate.classList.remove("hidden");
        } else {
            progress.classList.remove("hidden");
            certificate.classList.add("hidden");
        }
    });
}

export function updateProgress(completed, total) {
    const bar = document.getElementById("progress-bar");
    const text = document.getElementById("progress-text");

    if (!bar || !text) return;

    const percent = Math.min((completed / total) * 100, 100);
    bar.style.width = `${percent}%`;
    text.textContent = `${completed}/${total}`;

    // 🔥 Jika sudah selesai, ubah tampilan
    const courseHeader = document.querySelector(".course-header");
    if (courseHeader) {
        const isCompleted = completed >= total;

        // update atribut data
        courseHeader.dataset.completed = isCompleted ? "true" : "false";

        // ambil elemen progress dan sertifikat
        const progress = courseHeader.querySelector(".progress");
        const certificate = courseHeader.querySelector(".certificate");

        if (isCompleted) {
            progress.classList.add("hidden");
            certificate.classList.remove("hidden");

            initDropdown(".certificate-dropdown");
        } else {
            progress.classList.remove("hidden");
            certificate.classList.add("hidden");
        }
    }
}

