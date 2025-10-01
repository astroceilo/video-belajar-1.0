// JS Load Rating
export function initRating() {
    const course = {
        title: "UI/UX Design",
        rating: 3.5,
        reviews: 86,
    };
    // const courses = [
    //   {title: "UI/UX Design", rating: 3.5, reviews: 86 },
    //   {title: "Web Dev", rating: 4.2, reviews: 120 },
    //   {title: "Digital Marketing", rating: 4.8, reviews: 210 },
    // ];

    function renderStars(rating, reviews, container) {
        container.innerHTML = ""; // reset

        // Wrap star
        const starsWrapper = document.createElement("div");
        starsWrapper.className = "flex items-center text-yellow-400";

        // Count star full, half, empty
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        // Render full star
        for (let i = 0; i < fullStars; i++) {
            starsWrapper.innerHTML += `<i class="fas fa-star"></i>`;
        }

        // Render half star
        if (halfStar) {
            starsWrapper.innerHTML += `<i class="fas fa-star-half-alt"></i>`;
        }

        // Render empty star
        for (let i = 0; i < emptyStars; i++) {
            starsWrapper.innerHTML += `<i class="far fa-star"></i>`;
        }

        // Text rating
        const text = document.createElement("p");
        text.className = "text-gray-700 text-sm underline";
        text.innerHTML = `<span class="font-medium">${rating}</span> <span class="text-gray-500">(${reviews})</span>`;

        container.appendChild(starsWrapper);
        container.appendChild(text);
    }

    // ShowId
    // renderStars(course.rating, course.reviews, document.getElementById("rating"));
    document.querySelectorAll(".rating").forEach((container) => {
        renderStars(course.rating, course.reviews, container);
    });

    // Looping rating
    // document.querySelectorAll(".rating").forEach((container, index) => {
    //   const course = courses[index];
    //   if (course) {
    //     renderStars(course.rating, course.reviews, container);
    //   }
    // });
}
//   End JS Load Rating