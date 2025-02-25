// JavaScript for Carousel Navigation (Single Testimonial at a Time)
document.addEventListener('DOMContentLoaded', function () {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentIndex = 0; // Start with the first testimonial
  let autoSlide; // Variable to store interval function

  // Function to show the testimonial based on the current index
  function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach(testimonial => {
      testimonial.style.display = 'none';
    });

    // Show the current testimonial
    testimonialCards[index].style.display = 'block';
  }

  // Function to go to the next testimonial
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonialCards.length; // Loop to the first one
    showTestimonial(currentIndex);
  }

  // Function to go to the previous testimonial
  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length; // Loop to last one
    showTestimonial(currentIndex);
  }

  // Start the automatic review change every 10 seconds
  function startAutoSlide() {
    autoSlide = setInterval(nextTestimonial, 10000);
  }

  // Stop auto-slide when user interacts
  function stopAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide(); // Restart auto-slide after user interaction
  }

  // Event Listeners
  nextBtn.addEventListener('click', function () {
    nextTestimonial();
    stopAutoSlide();
  });

  prevBtn.addEventListener('click', function () {
    prevTestimonial();
    stopAutoSlide();
  });

  // Initialize the first testimonial
  showTestimonial(currentIndex);

  // Start auto slide
  startAutoSlide();
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("newsletter-form").addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = document.getElementById("email");
      const email = emailInput.value.trim();
      const successMessage = document.getElementById("success-message");
      const errorMessage = document.getElementById("error-message");

      // Clear previous messages
      successMessage.textContent = "";
      errorMessage.textContent = "";

      // Simple email validation
      if (!validateEmail(email)) {
          errorMessage.textContent = "Please enter a valid email address.";
          return;
      }

      // Save email to localStorage (simulating a subscription)
      let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
      
      if (subscribers.includes(email)) {
          errorMessage.textContent = "You are already subscribed!";
          return;
      }

      subscribers.push(email);
      localStorage.setItem("subscribers", JSON.stringify(subscribers));

      successMessage.textContent = "Thank you for subscribing!";
      emailInput.value = ""; // Clear input field
  });
});

// Email validation function
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}