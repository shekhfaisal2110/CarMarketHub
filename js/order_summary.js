window.onload = function() {
  // Retrieve the stored orders from localStorage
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  if (orders.length > 0) {
    const orderDetails = orders[orders.length - 1]; // Get the most recent order
    // Populate the order summary with the car details
    document.getElementById('order-car-name').textContent = orderDetails.carName || "Car name not available";
    document.getElementById('order-car-price').textContent = `Price: ${orderDetails.carPrice || 'N/A'}`;
    document.getElementById('order-car-image').src = orderDetails.carImage || 'default-image.jpg';
    // Populate the customer details
    document.getElementById('order-name').textContent = `Name : ${orderDetails.customerName || 'Name not available'}`;
    document.getElementById('order-address').textContent =`Address : ${orderDetails.customerAddress || 'Address not available'}`;
    document.getElementById('order-email').textContent =`Email : ${orderDetails.customerEmail || 'Email not available'}`;
    document.getElementById('order-message').textContent =`Message : ${orderDetails.specialInstructions || 'No special instructions'}`;
  } else {
    alert("No order found. Please complete the Browse our Cars and checkout process.");
    window.location.href = "browseCar.html"; // Redirect to the browse cars page if no order data is found
  }
};

// Redirect user to My Orders page
function redirectToMyOrderPage() {
  window.location.href = 'myOrder.html';
}