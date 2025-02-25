document.addEventListener('DOMContentLoaded', () => {
    // Main Image Gallery Logic
    const mainImage = document.getElementById("galleryImage");
    const prevBtnMain = document.getElementById("prevBtnMain");
    const nextBtnMain = document.getElementById("nextBtnMain");
    const images = [
        './carImg/ford_mustang_1.jpg', 
        './carImg/ford_mustang_2.jpg', 
        './carImg/ford_mustang_3.jpg', 
        './carImg/ford_mustang_4.jpg',
        './carImg/ford_mustang_5.jpg', 
        './carImg/ford_mustang_6.jpg', 
        './carImg/ford_mustang_7.jpg', 
        './carImg/ford_mustang_8.jpg',
        './carImg/ford_mustang_9.jpg', 
        './carImg/ford_mustang_10.jpg', 
        './carImg/ford_mustang_11.jpg', 
        './carImg/ford_mustang_12.jpg',
        './carImg/ford_mustang_13.jpg', 
        './carImg/ford_mustang_14.jpg', 
        './carImg/ford_mustang_15.jpg', 
        './carImg/ford_mustang_16.jpg',
        './carImg/ford_mustang_17.jpg', 
        './carImg/ford_mustang_18.jpg', 
        './carImg/ford_mustang_19.jpg', 
        './carImg/ford_mustang_20.jpg',
        './carImg/ford_mustang_21.jpg', 
        './carImg/ford_mustang_22.jpg', 
        './carImg/ford_mustang_23.jpg', 
        './carImg/ford_mustang_24.jpg',
        './carImg/ford_mustang_25.jpg', 
        './carImg/ford_mustang_26.jpg', 
        './carImg/ford_mustang_27.jpg', 
        './carImg/ford_mustang_28.jpg',
        './carImg/ford_mustang_29.jpg', 
        './carImg/ford_mustang_30.jpg',
        './carImg/ford_mustang_31.jpg', 
        './carImg/ford_mustang_32.jpg', 
        './carImg/ford_mustang_33.jpg', 
        './carImg/ford_mustang_34.jpg',
        './carImg/ford_mustang_35.jpg', 
        './carImg/ford_mustang_36.jpg', 
        './carImg/ford_mustang_37.jpg',
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
