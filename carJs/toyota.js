document.addEventListener('DOMContentLoaded', () => {
    // Main Image Gallery Logic
    const mainImage = document.getElementById("galleryImage");
    const prevBtnMain = document.getElementById("prevBtnMain");
    const nextBtnMain = document.getElementById("nextBtnMain");
    const images = [
        './carImg/toyota_camry_1.jpg', 
        './carImg/toyota_camry_2.jpg', 
        './carImg/toyota_camry_3.jpg', 
        './carImg/toyota_camry_4.jpg',
        './carImg/toyota_camry_5.jpg', 
        './carImg/toyota_camry_6.jpg', 
        './carImg/toyota_camry_7.jpg', 
        './carImg/toyota_camry_8.jpg',
        './carImg/toyota_camry_9.jpg', 
        './carImg/toyota_camry_10.jpg', 
        './carImg/toyota_camry_11.jpg', 
        './carImg/toyota_camry_12.jpg',
        './carImg/toyota_camry_13.jpg', 
        './carImg/toyota_camry_14.jpg', 
        './carImg/toyota_camry_15.jpg', 
        './carImg/toyota_camry_16.jpg',
        './carImg/toyota_camry_17.jpg', 
        './carImg/toyota_camry_18.jpg', 
        './carImg/toyota_camry_19.jpg', 
        './carImg/toyota_camry_20.jpg',
        './carImg/toyota_camry_21.jpg', 
        './carImg/toyota_camry_22.jpg', 
        './carImg/toyota_camry_23.jpg', 
        './carImg/toyota_camry_24.jpg',
        './carImg/toyota_camry_25.jpg', 
        './carImg/toyota_camry_26.jpg', 
        './carImg/toyota_camry_27.jpg', 
        './carImg/toyota_camry_28.jpg',
        './carImg/toyota_camry_29.jpg', 
        './carImg/toyota_camry_30.jpg'
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
