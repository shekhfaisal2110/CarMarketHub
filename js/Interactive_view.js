// Array to hold the image paths for both the main images and thumbnails
const images = [
    './carAllFolderIMG/VintageCarInIndia/HispanoSuizaH6.jpg', 
    './carAllFolderIMG/SportCarInIndia/NissanGT-R.jpg', 
    './carAllFolderIMG/bestCarInWorld/sscUltimateAero.jpg', 
    './carAllFolderIMG/ExpensiveCarInWorld/BugattiCentodieci.jpg'
];
// Track the index of the currently displayed image
let currentImageIndex = 0;
// Function to change the main image when clicking on a thumbnail
function changeImage(imagePath) {
    const galleryImage = document.getElementById('galleryImage');
    galleryImage.src = imagePath;
    // Update current image index based on the clicked thumbnail image
    currentImageIndex = images.indexOf(imagePath);
}

// Function to handle previous/next navigation
function changeImageByNav(direction) {
    currentImageIndex += direction;
    // Wrap around the image index
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    // Update the main image
    const galleryImage = document.getElementById('galleryImage');
    galleryImage.src = images[currentImageIndex];
}

// Preload images (optional for smoother transitions)
function preloadImages() {
    images.forEach(image => {
        const img = new Image();
        img.src = image;
    });
}

// Attach event listeners for navigation buttons (left and right)
document.getElementById('prevBtn').addEventListener('click', () => changeImageByNav(-1));
document.getElementById('nextBtn').addEventListener('click', () => changeImageByNav(1));
// Attach event listeners for thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => changeImage(images[index]));
});
// Preload images when the page is loaded
preloadImages();

// Optionally, automatically set the first image on page load
window.onload = function() {
    const galleryImage = document.getElementById('galleryImage');
    galleryImage.src = images[currentImageIndex];
};
