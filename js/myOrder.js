// Function to load orders and display them
window.onload = function () {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  // Get the orders container element
  const ordersContainer = document.getElementById("orders-container");
  if (orders.length > 0) {
    let totalRefund = 0; // Variable to store total refund amount
    // Loop through the orders and display them
    orders.forEach((order) => {
      const orderDiv = document.createElement("div");
      orderDiv.classList.add("order-item");
      // Set default message if not provided
      const message = order.specialInstructions || "No special instructions provided.";
      // Convert price to number (removing ₹ and commas)
      const orderPrice = parseInt(order.carPrice.replace(/[\u20b9,]/g, ""));
      totalRefund += orderPrice; // Add price to total refund
      // Display car details
      orderDiv.innerHTML = `
        <h3>${order.carName}</h3>
        <img src="${order.carImage}" alt="Car Image">
        <p>Price: ${order.carPrice}</p>
        <p><strong>Customer Name:</strong> ${order.customerName}</p>
        <p><strong>Address:</strong> ${order.customerAddress}</p>
        <p><strong>Email:</strong> ${order.customerEmail}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Order Date:</strong> ${order.orderDate}</p>
        <p class="status"><strong>Status:</strong> ${order.status}</p>
      `;
      document.addEventListener('DOMContentLoaded', () => {
        const statuses = document.querySelectorAll('.status');
        statuses.forEach(status => {
          switch (status.textContent.toLowerCase()) {
            case 'pending':
              status.classList.add('pending');
              break;
            case 'completed':
              status.classList.add('completed');
              break;
            case 'cancelled':
              status.classList.add('cancelled');
              break;
            default:
              status.style.color = '#6c757d';
          }
        });
      });
      // Append the order item to the container
      ordersContainer.appendChild(orderDiv);
    });
    // Store the total refund amount in localStorage to access in browseCar.html
    localStorage.setItem("refundAmount", totalRefund);
    // Show the "Clear All Orders" button if there are more than 5 orders
    if (orders.length > 5) {
      document.getElementById("clear-orders-btn").style.display = "inline-block";
    }
  } else {
    ordersContainer.innerHTML = "<p>No orders found.</p>";
  }
};

// Function to redirect user to the homepage
function goHome() {
  window.location.href = "index.html";
}

// Function to redirect user to the cars page
function goToCarsPage() {
  window.location.href = "browseCar.html";
}

// Function to clear all orders and refund the total price
function clearOrders() {
  if (confirm("Are you sure you want to clear all your orders?")) {
    // Get the refund amount
    let refundAmount = localStorage.getItem("refundAmount") 
      ? parseInt(localStorage.getItem("refundAmount")) 
      : 0;
    // Get the current balance from localStorage
    let currentBalance = localStorage.getItem("userBalance") 
      ? parseInt(localStorage.getItem("userBalance")) 
      : 10000000000;
    // Add the refund amount to the balance
    let updatedBalance = currentBalance + refundAmount;
    localStorage.setItem("userBalance", updatedBalance); // Save updated balance
    // Remove orders from localStorage
    localStorage.removeItem("orders");
    localStorage.removeItem("refundAmount"); // Remove refund record
    // Update UI
    document.getElementById("orders-container").innerHTML = "<p>No orders found.</p>";
    document.getElementById("clear-orders-btn").style.display = "none"; // Hide clear button
    // Notify user about the refund
    alert(`₹${refundAmount.toLocaleString()} has been added back to your balance!`);
  }
}

// Additional Improvement: Handle potential errors
document.addEventListener('error', (e) => {
  console.error('An error occurred:', e);
});
