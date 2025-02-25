document.addEventListener('DOMContentLoaded', () => {
    // Main Image Gallery Logic
    const mainImage = document.getElementById("galleryImage");
    const prevBtnMain = document.getElementById("prevBtnMain");
    const nextBtnMain = document.getElementById("nextBtnMain");
    const images = [
        "./carImg/rolls-royce_phantom_1.webp", 
        "./carImg/rolls-royce_phantom_2.webp", 
        "./carImg/rolls-royce_phantom_3.webp", 
        "./carImg/rolls-royce_phantom_4.webp", 
        "./carImg/rolls-royce_phantom_5.webp", 
        "./carImg/rolls-royce_phantom_6.webp", 
        "./carImg/rolls-royce_phantom_7.webp", 
        "./carImg/rolls-royce_phantom_8.webp", 
        "./carImg/rolls-royce_phantom_9.webp", 
        "./carImg/rolls-royce_phantom_10.webp",
        "./carImg/rolls-royce_phantom_11.webp",
        "./carImg/rolls-royce_phantom_12.webp",
        "./carImg/rolls-royce_phantom_13.webp",
        "./carImg/rolls-royce_phantom_14.webp",
        "./carImg/rolls-royce_phantom_15.webp",
        "./carImg/rolls-royce_phantom_16.webp",
        "./carImg/rolls-royce_phantom_17.webp",
        "./carImg/rolls-royce_phantom_18.webp",
        "./carImg/rolls-royce_phantom_33.webp",
        "./carImg/rolls-royce_phantom_34.webp",
        "./carImg/rolls-royce_phantom_35.webp",
        "./carImg/rolls-royce_phantom_36.webp",
        "./carImg/rolls-royce_phantom_37.webp",
        "./carImg/rolls-royce_phantom_38.webp"
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
