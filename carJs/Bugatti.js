document.addEventListener('DOMContentLoaded', () => {
    // Main Image Gallery Logic
    const mainImage = document.getElementById("galleryImage");
    const prevBtnMain = document.getElementById("prevBtnMain");
    const nextBtnMain = document.getElementById("nextBtnMain");
    const images = [
       "./carImg/bugatti_veyron_001.jpg",
        "./carImg/bugatti_veyron_002.jpg",
        "./carImg/bugatti_veyron_003.jpg",
        "./carImg/bugatti_veyron_004.jpg",
        "./carImg/bugatti_veyron_005.jpg",
        "./carImg/bugatti_veyron_006.jpg",
        "./carImg/bugatti_veyron_007.jpg",
        "./carImg/bugatti_veyron_008.jpg",
        "./carImg/bugatti_veyron_009.jpg",
        "./carImg/bugatti_veyron_010.jpg",
        "./carImg/bugatti_veyron_011.jpg",
        "./carImg/bugatti_veyron_012.jpg",
        "./carImg/bugatti_veyron_013.jpg",
        "./carImg/bugatti_veyron_014.jpg",
        "./carImg/bugatti_veyron_015.jpg",
        "./carImg/bugatti_veyron_016.jpg",
        "./carImg/bugatti_veyron_017.jpg",
        "./carImg/bugatti_veyron_018.jpg",
        "./carImg/bugatti_veyron_019.jpg",
        "./carImg/bugatti_veyron_020.jpg",
        "./carImg/bugatti_veyron_021.jpg",
        "./carImg/bugatti_veyron_022.jpg",
        "./carImg/bugatti_veyron_023.jpg",
        "./carImg/bugatti_veyron_024.jpg",
        "./carImg/bugatti_veyron_025.jpg",
        "./carImg/bugatti_veyron_026.jpg",
        "./carImg/bugatti_veyron_027.jpg",
        "./carImg/bugatti_veyron_028.jpg",
        "./carImg/bugatti_veyron_029.jpg",
        "./carImg/bugatti_veyron_030.jpg",
        "./carImg/bugatti_veyron_031.jpg",
        "./carImg/bugatti_veyron_032.jpg",
        "./carImg/bugatti_veyron_033.jpg",
        "./carImg/bugatti_veyron_034.jpg",
        "./carImg/bugatti_veyron_035.jpg",
        "./carImg/bugatti_veyron_036.jpg",
        "./carImg/bugatti_veyron_037.jpg",
        "./carImg/bugatti_veyron_038.jpg",
        "./carImg/bugatti_veyron_039.jpg",
        "./carImg/bugatti_veyron_040.jpg",
        "./carImg/bugatti_veyron_041.jpg",
        "./carImg/bugatti_veyron_042.jpg",
        "./carImg/bugatti_veyron_043.jpg",
        "./carImg/bugatti_veyron_render_cage.jpg",
        "./carImg/bugatti_veyron_subdivision_0.jpg",
        "./carImg/bugatti_veyron_subdivision_1.jpg",
        "./carImg/bugatti_veyron_g_004.jpg",
        "./carImg/bugatti_veyron_g_005.jpg",
        "./carImg/bugatti_veyron_g_006.jpg",
        "./carImg/bugatti_veyron_g_007.jpg",
        "./carImg/bugatti_veyron_g_008.jpg",
        "./carImg/bugatti_veyron_g_009.jpg",
        "./carImg/bugatti_veyron_g_010.jpg",
        "./carImg/bugatti_veyron_g_011.jpg",
        "./carImg/bugatti_veyron_g_012.jpg",
        "./carImg/bugatti_veyron_g_014.jpg",
        "./carImg/bugatti_veyron_g_015.jpg",
        "./carImg/bugatti_veyron_g_016.jpg",
        "./carImg/bugatti_veyron_g_017.jpg"
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
