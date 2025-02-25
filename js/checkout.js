// Function to process the checkout
function processCheckout() {
  // Retrieve selected car details from localStorage
  const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
  // Check if a car has been selected
  if (selectedCar) {
    const carName = selectedCar.carName;
    const carImage = selectedCar.carImage;
    const carPrice = selectedCar.carPrice;
    // Retrieve customer input values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Validate form fields: Name, Address, and Email
    if (name && address && email) {
      // Create the order object to store
      const orderDetails = {
        carName: carName,
        carPrice: carPrice,
        carImage: carImage,
        customerName: name,
        customerAddress: address,
        customerEmail: email,
        specialInstructions: message,
        orderDate: new Date().toLocaleDateString(),
        status: "Pending"
      };
      // Retrieve existing orders from localStorage or initialize an empty array
      let orders = JSON.parse(localStorage.getItem('orders')) || [];
      // Push the new order details into the orders array
      orders.push(orderDetails);
      // Store the updated orders array back in localStorage
      localStorage.setItem('orders', JSON.stringify(orders));
      // Optionally, if the user is logged in, store the order under their username
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        let userOrders = JSON.parse(localStorage.getItem(loggedInUser + "_orders")) || [];
        userOrders.push(orderDetails);
        localStorage.setItem(loggedInUser + "_orders", JSON.stringify(userOrders));
      }
      // Redirect user to the order summary page after successful order placement
      window.location.href = 'order_summary.html';  // Redirect to the order summary page
    } else {
      alert("Please fill in all required fields.");
    }
  } else {
    alert("No car selected! Please select a car before proceeding.");
  }
}

// On page load, populate car details from localStorage to the checkout page
window.onload = function() {
  const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
  // Check if a car is selected, otherwise alert the user
  if (selectedCar) {
    document.getElementById('car-name').textContent = selectedCar.carName || "Car name not available";
    document.getElementById('car-price').textContent = selectedCar.carPrice || "Price not available";
    document.getElementById('car-image').src = selectedCar.carImage || "default-image.jpg";
  } else {
    alert("No car selected! Please select a car before proceeding.");
  }
};
