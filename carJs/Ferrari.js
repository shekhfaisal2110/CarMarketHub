document.addEventListener('DOMContentLoaded', () => {
    // Main Image Gallery Logic
    const mainImage = document.getElementById("galleryImage");
    const prevBtnMain = document.getElementById("prevBtnMain");
    const nextBtnMain = document.getElementById("nextBtnMain");
    const images = [
        "./carImg/Ferrari_GTC4Lusso_1.jpg", 
        "./carImg/Ferrari_GTC4Lusso_2.jpg", 
        "./carImg/Ferrari_GTC4Lusso_3.jpg", 
        "./carImg/Ferrari_GTC4Lusso_4.jpg", 
        "./carImg/Ferrari_GTC4Lusso_5.jpg", 
        "./carImg/Ferrari_GTC4Lusso_6.jpg", 
        "./carImg/Ferrari_GTC4Lusso_7.jpg", 
        "./carImg/Ferrari_GTC4Luss_8.webp", 
        "./carImg/Ferrari_GTC4Luss_9.webp", 
        "./carImg/Ferrari_GTC4Luss_10.webp",
        "./carImg/Ferrari_GTC4Luss_11.webp",
        "./carImg/Ferrari_GTC4Luss_12.webp",
        "./carImg/Ferrari_GTC4Luss_13.webp",
        "./carImg/Ferrari_GTC4Luss_14.webp",
        "./carImg/Ferrari_GTC4Luss_15.webp",
        "./carImg/Ferrari_GTC4Luss_16.webp",
        "./carImg/Ferrari_GTC4Luss_17.webp",
        "./carImg/Ferrari_GTC4Luss_18.webp",
        "./carImg/Ferrari_GTC4Luss_19.webp",
        "./carImg/Ferrari_GTC4Luss_20.webp",
        "./carImg/Ferrari_GTC4Luss_21.webp",
        "./carImg/Ferrari_GTC4Luss_22.webp"       
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
