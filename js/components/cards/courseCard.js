export function courseCard(course) {
  const {
    title,
    category,
    thumbnail,
    description,
    instructor: { name = '', profile_image = '', position = '', company = '' } = {},
    price: { original, discounted },
    rating: { stars, reviews },
    link
  } = course;

  // Generate bintang rating
  const ratingStars = generateStars(stars);

  // Format harga (biar ada Rp dan titik ribuan)
  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `Rp ${(price / 1000000).toFixed(1).replace(/\.0$/, "")}JT`;
    } else if (price >= 1000) {
      return `Rp ${(price / 1000).toFixed(0)}K`;
    } else {
      return `Rp ${price}`;
    }
  };

  // Bagian harga (kalau ada diskon)
  const priceHTML = discounted
    ? `
        <span class="text-red-500 font-base text-xl line-through">${formatPrice(discounted)}</span>
        <span class="text-green-600 font-semibold text-2xl">${formatPrice(original)}</span>
      `
    : `<span class="text-green-600 font-semibold text-2xl">${formatPrice(original)}</span>`;

  return `
    <div
      class="rounded-2xl bg-white border border-gray-100 p-4 transition duration-300 ease-in-out transform opacity-100 scale-100"
      data-category="${category}"
    >
      <img
        src="${thumbnail}"
        alt="${title}"
        class="h-64 w-full p-2 rounded-2xl object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div class="relative p-2">
        <h1 class="mt-1.5 text-lg font-bold text-gray-900 md:text-xl xl:text-2xl">
          <a href="${link}">${title}</a>
        </h1>

        <p class="mt-1.5 line-clamp-2 text-lg md:text-base lg:text-xl text-gray-700">
          ${description}
        </p>

        <div class="flex items-start gap-4 py-1.5 md:py-2.5 lg:py-3.5">
          <a href="#" class="block shrink-0">
            <img
              alt="${name}"
              src="${profile_image}"
              class="size-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 class="font-medium text-base md:text-lg lg:text-xl">
              <a href="#">${name}</a>
            </h3>

            <p class="line-clamp-2 text-sm md:text-base lg:text-lg text-gray-700">
              ${position ?? ""} ${company ? `di <b>${company}</b>` : ""}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-0.5 text-sm">
            ${ratingStars}
            <span class="ml-1 text-gray-700">${stars} (${reviews})</span>
          </div>
          <div class="flex items-center gap-2">
            <a href="${link}">${priceHTML}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return `
    ${'<i class="fa-solid fa-star text-yellow-400"></i>'.repeat(fullStars)}
    ${halfStar ? '<i class="fa-solid fa-star-half-stroke text-yellow-400"></i>' : ''}
    ${'<i class="fa-regular fa-star text-gray-300"></i>'.repeat(emptyStars)}
  `;
}
