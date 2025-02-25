document.addEventListener('DOMContentLoaded', () => {
    // Main Image Gallery Logic
    const mainImage = document.getElementById("galleryImage");
    const prevBtnMain = document.getElementById("prevBtnMain");
    const nextBtnMain = document.getElementById("nextBtnMain");
    const images = [
        "./carImg/BentleyFlyingSpur_1.jpg",
        "./carImg/BentleyFlyingSpur_2.jpg",
        "./carImg/BentleyFlyingSpur_3.jpg",
        "./carImg/BentleyFlyingSpu_4.jpg",
        "./carImg/BentleyFlyingSpu_5.jpg",
        "./carImg/BentleyFlyingSpu_6.jpg",
        "./carImg/BentleyFlyingSpu_7.jpg",
        "./carImg/BentleyFlyingSpu_8.jpg",
        "./carImg/BentleyFlyingSpu_9.jpg",
        "./carImg/BentleyFlyingSpu_10.jpg",
        "./carImg/BentleyFlyingSpu_11.jpg",
        "./carImg/BentleyFlyingSpu_12.jpg",
        "./carImg/BentleyFlyingSpu_13.jpg",
        "./carImg/BentleyFlyingSpu_14.jpg",
        "./carImg/BentleyFlyingSpu_15.jpg",
        "./carImg/BentleyFlyingSpu_16.jpg",
        "./carImg/BentleyFlyingSpu_17.jpg",       
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
