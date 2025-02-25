document.addEventListener('DOMContentLoaded', () => {
    // Main Image Gallery Logic
    const mainImage = document.getElementById("galleryImage");
    const prevBtnMain = document.getElementById("prevBtnMain");
    const nextBtnMain = document.getElementById("nextBtnMain");
    const images = [
        "./carImg/lamborghini_urus_8.avif",
        "./carImg/lamborghini_urus_9.avif",
        "./carImg/lamborghini_urus_10.avif",
        "./carImg/lamborghini_urus_11.avif",
        "./carImg/lamborghini_urus_12.avif",
        "./carImg/lamborghini_urus_13.avif",
        "./carImg/lamborghini_urus_14.avif",
        "./carImg/lamborghini_urus_15.avif",
        "./carImg/lamborghini_urus_16.avif",
        "./carImg/lamborghini_urus_17.avif",
        "./carImg/lamborghini_urus_18.avif",
        "./carImg/lamborghini_urus_19.avif",
        "./carImg/lamborghini_urus_1.jpg",
        "./carImg/lamborghini_urus_2.jpg",
        "./carImg/lamborghini_urus_3.jpg",
        "./carImg/lamborghini_urus_4.jpg",
        "./carImg/lamborghini_urus_5.jpg",
        "./carImg/lamborghini_urus_6.jpg",
        "./carImg/lamborghini_urus_7.jpg",
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
