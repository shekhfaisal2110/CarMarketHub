document.addEventListener("DOMContentLoaded", function () {
    checkUserLogin();
});

function toggleNav() {
    let nav = document.getElementById("mobile-nav");
    nav.classList.toggle("show");
}

function closeNav() {
    let nav = document.getElementById("mobile-nav");
    nav.classList.remove("show");
}

// Check if user is logged in
function checkUserLogin() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const authButtons = document.querySelector(".auth-buttons");
    const userProfile = document.querySelector(".user-profile");
    if (user) {
        authButtons.style.display = "none";
        userProfile.style.display = "block";
        const username = user.name || user.emailOrPhone.split('@')[0];
        document.getElementById("user-name-input").value = username;
        document.getElementById("user-name-display").textContent = `Hi, ${username}`;
        document.getElementById("user-email").textContent = user.emailOrPhone;
        const userImage = user.image || "./carAllFolderIMG/ExpensiveCarInWorld/Bugatti Divo.jpg";
        document.getElementById("user-image").src = userImage;
    } else {
        authButtons.style.display = "block";
        userProfile.style.display = "none";
    }
}

// Toggle name edit mode
function toggleEditName() {
    document.getElementById("user-name-input").style.display = "inline-block";
    document.getElementById("user-name-display").style.display = "none";
    document.querySelector(".save-button").style.display = "inline-block";
    document.querySelector(".cancel-button").style.display = "inline-block";
    document.querySelector(".edit-button").style.display = "none";
}

// Save new name
function saveName() {
    const newName = document.getElementById("user-name-input").value.trim();
    if (newName) {
        let user = JSON.parse(localStorage.getItem("loggedInUser"));
        user.name = newName;
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        document.getElementById("user-name-display").textContent = `Hi, ${newName}`;
        cancelEdit();
    }
}

// Cancel edit mode
function cancelEdit() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    document.getElementById("user-name-input").value = user.name || user.emailOrPhone.split('@')[0];
    document.getElementById("user-name-input").style.display = "none";
    document.getElementById("user-name-display").style.display = "inline-block";
    document.querySelector(".save-button").style.display = "none";
    document.querySelector(".cancel-button").style.display = "none";
    document.querySelector(".edit-button").style.display = "inline-block";
}

// Handle CTA button click
function handleCTAClick() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
        alert("You are already logged in as " + user.name + ".");
    } else {
        window.location.href = "login.html";
    }
}

// Change profile image
function changeProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("user-image").src = e.target.result;
            let user = JSON.parse(localStorage.getItem("loggedInUser"));
            if (user) {
                user.image = e.target.result;
                localStorage.setItem("loggedInUser", JSON.stringify(user));
            }
        };
        reader.readAsDataURL(file);
    }
}

// Log out user
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    checkUserLogin();
}

// Toggle user profile
function toggleUserProfile() {
    const profileDetails = document.getElementById("profile-details");
    profileDetails.style.display = (profileDetails.style.display === "block") ? "none" : "block";
}
