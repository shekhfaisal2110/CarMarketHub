document.addEventListener('DOMContentLoaded', () => {
    // Main Image Gallery Logic
    const mainImage = document.getElementById("galleryImage");
    const prevBtnMain = document.getElementById("prevBtnMain");
    const nextBtnMain = document.getElementById("nextBtnMain");
    const images = [
        "./carImg/Jaguar_F-Type_1.jpg",
        "./carImg/Jaguar_F-Type_2.jpg",
        "./carImg/Jaguar_F-Type_3.jpg", 
        "./carImg/Jaguar_F-Type_4.jpg", 
        "./carImg/Jaguar_F-Type_5.jpg", 
        "./carImg/Jaguar_F-Type_6.jpg", 
        "./carImg/Jaguar_F-Type_7.jpg", 
        "./carImg/Jaguar_F-Type_8.jpg", 
        "./carImg/Jaguar_F-Type_9.jpg", 
        "./carImg/Jaguar_F-Type_10.jpg",
        "./carImg/Jaguar_F-Type_11.jpg",
        "./carImg/Jaguar_F-Type_12.jpg",
        "./carImg/Jaguar_F-Type_13.jpg",
        "./carImg/Jaguar_F-Type_14.jpg",
        "./carImg/Jaguar_F-Type_15.jpg",
        "./carImg/Jaguar_F-Type_16.jpg",
        "./carImg/Jaguar_F-Type_17.jpg",
        "./carImg/Jaguar_F-Type_18.jpg",
        "./carImg/Jaguar_F-Type_19.jpg",
        "./carImg/Jaguar_F-Type_20.jpg",
        "./carImg/Jaguar_F-Type_21.jpg",
        "./carImg/Jaguar_F-Type_22.jpg",
        "./carImg/Jaguar_F-Type_23.jpg",
        "./carImg/Jaguar_F-Type_24.jpg",
        "./carImg/Jaguar_F-Type_25.jpg",
        "./carImg/Jaguar_F-Type_26.jpg",
        "./carImg/Jaguar_F-Type_27.jpg",
        "./carImg/Jaguar_F-Type_28.jpg",
        "./carImg/Jaguar_F-Type_29.jpg",
        "./carImg/Jaguar_F-Type_30.jpg",
        "./carImg/Jaguar_F-Type_31.jpg",
        "./carImg/Jaguar_F-Type_32.jpg",
        "./carImg/Jaguar_F-Type_33.jpg"
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
