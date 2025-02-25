// Retrieve existing cars from localStorage on page load
let carsForSale = JSON.parse(localStorage.getItem('carsForSale')) || [];

document.addEventListener('DOMContentLoaded', () => {
  displayCars();
});

// Function to handle form submission
document.getElementById('sell-car-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Get form values
  const carMake = document.getElementById('car-make').value;
  const carModel = document.getElementById('car-model').value;
  const carYear = document.getElementById('car-year').value;
  const carPrice = document.getElementById('car-price').value;
  const carDescription = document.getElementById('car-description').value;
  const carImage = document.getElementById('car-image').value;
  // Validate input
  if (!carMake || !carModel || !carYear || !carPrice || !carDescription || !carImage) {
    alert("Please fill in all fields before submitting.");
    return;
  }
  // Create a new car object
  const newCar = {
    make: carMake,
    model: carModel,
    year: carYear,
    price: carPrice,
    description: carDescription,
    image: carImage
  };
  // Add the new car to the array and localStorage
  carsForSale.push(newCar);
  localStorage.setItem('carsForSale', JSON.stringify(carsForSale));
  // Show success message for adding a car
  showMessage("Car added successfully!", "success");
  // Clear form fields
  document.getElementById('sell-car-form').reset();
  // Display updated car list
  displayCars();
});

// Function to display the list of cars for sale
function displayCars() {
  const carListContainer = document.getElementById('car-list');
  carListContainer.innerHTML = ''; // Clear existing car list
  if (carsForSale.length === 0) {
    carListContainer.innerHTML = "<p>No cars available for sale.</p>";
    return;
  }
  // Create and display a card for each car
  carsForSale.forEach((car, index) => {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');
    // Insert the car details into the card
    carCard.innerHTML = `
      <img src="${car.image}" alt="${car.make} ${car.model}">
      <h3>${car.make} ${car.model} (${car.year})</h3>
      <p>${car.description}</p>
      <p class="price">₹${car.price}</p>
      <button class="delete-btn" onclick="deleteCar(${index})">🗑️</button>
    `;
    // Append the car card to the car list container
    carListContainer.appendChild(carCard);
  });
}

// Function to delete a car from the list
function deleteCar(index) {
  carsForSale.splice(index, 1);
  localStorage.setItem('carsForSale', JSON.stringify(carsForSale));
  // Display updated car list
  displayCars();
  // Show delete message
  showMessage("Car removed successfully!", "delete");
}

// Function to show messages
function showMessage(message, type) {
  const successMessage = document.getElementById('success-message');
  const messageElement = document.getElementById('delete-message');
  if (successMessage && messageElement) {
    successMessage.style.display = 'block';
    messageElement.textContent = message;
    messageElement.style.display = 'block';
    if (type === "delete") {
      messageElement.style.color = "red"; // Make delete message red
    } else {
      messageElement.style.color = "green"; // Make success message green
    }
    // Hide message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
      messageElement.style.display = 'none';
    }, 3000);
  }
}
