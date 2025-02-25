document.addEventListener('DOMContentLoaded', () => {
    // Main Image Gallery Logic
    const mainImage = document.getElementById("galleryImage");
    const prevBtnMain = document.getElementById("prevBtnMain");
    const nextBtnMain = document.getElementById("nextBtnMain");
    const images = [
        "./carImg/Rolls-Royce_Ghost_1.webp",
        "./carImg/Rolls-Royce_Ghost_2.webp", 
        "./carImg/Rolls-Royce_Ghost_3.webp", 
        "./carImg/Rolls-Royce_Ghost_4.webp", 
        "./carImg/Rolls-Royce_Ghost_5.webp", 
        "./carImg/Rolls-Royce_Ghost_6.webp", 
        "./carImg/Rolls-Royce_Ghost_7.webp", 
        "./carImg/Rolls-Royce_Ghost_8.webp", 
        "./carImg/Rolls-Royce_Ghost_9.webp", 
        "./carImg/Rolls-Royce_Ghost_10.webp",
        "./carImg/Rolls-Royce_Ghost_11.webp",
        "./carImg/Rolls-Royce_Ghost_12.webp",
        "./carImg/Rolls-Royce_Ghost_13.webp",
        "./carImg/Rolls-Royce_Ghost_14.webp",
        "./carImg/Rolls-Royce_Ghost_15.webp",
        "./carImg/Rolls-Royce_Ghost_16.webp",
        "./carImg/Rolls-Royce_Ghost_17.webp",
        "./carImg/Rolls-Royce_Ghost_18.webp",
        "./carImg/Rolls-Royce_Ghost_19.webp",
        "./carImg/Rolls-Royce_Ghost_20.webp",
        "./carImg/Rolls-Royce_Ghost_21.webp",
        "./carImg/Rolls-Royce_Ghost_22.webp",
        "./carImg/Rolls-Royce_Ghost_23.webp",
        "./carImg/Rolls-Royce_Ghost_24.webp",
        "./carImg/Rolls-Royce_Ghost_25.webp",
        "./carImg/Rolls-Royce_Ghost_26.webp",
        "./carImg/Rolls-Royce_Ghost_27.webp",
        "./carImg/Rolls-Royce_Ghost_28.webp",
        "./carImg/Rolls-Royce_Ghost_29.webp",
        "./carImg/Rolls-Royce_Ghost_31.webp",
    ];

    let currentIndex = 0;
    const updateMainImage = () => {
        mainImage.src = images[currentIndex];
    };
    prevBtnMain.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateMainImage();
    });
    nextBtnMain.addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateMainImage();
    });
    // Thumbnail Gallery Logic
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentIndex = index;
            updateMainImage();
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const prevBtnThumbnails = document.getElementById('prevBtnThumbnails');
    const nextBtnThumbnails = document.getElementById('nextBtnThumbnails');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    let scrollAmount = 90; // Adjust the scroll amount as needed (in pixels)
    // Left Arrow: Scroll left in the thumbnail container
    prevBtnThumbnails.addEventListener('click', () => {
        thumbnailContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth',
        });
    });
    // Right Arrow: Scroll right in the thumbnail container
    nextBtnThumbnails.addEventListener('click', () => {
        thumbnailContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    });
    // Handle clicking on a thumbnail: Change the main image
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;  // Set the main image to the clicked thumbnail's image
        });
    });
});
