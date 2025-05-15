// Mobile menu toggle
document.getElementById("menu-btn").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("animate__animated", "animate__fadeInDown");
});

// Service tabs
function changeTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all buttons
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
    button.classList.add("bg-gray-200", "text-gray-800");
    button.classList.remove("bg-blue-600", "text-white");
  });

  // Show selected tab content
  document.getElementById(tabId).classList.add("active");

  // Add active class to clicked button
  event.currentTarget.classList.add("active", "bg-blue-600", "text-white");
  event.currentTarget.classList.remove("bg-gray-200", "text-gray-800");
}

// FAQ toggle
function toggleFAQ(id) {
  const content = document.getElementById(`faq-content-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);

  content.classList.toggle("hidden");
  icon.classList.toggle("transform");
  icon.classList.toggle("rotate-180");
}

// Form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Here you would typically send the form data to your server
    // For this example, we'll just show a success message
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });

// Scroll animations
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("slide-up")) {
            entry.target.style.transform = "translateY(0)";
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => {
    fadeInObserver.observe(element);
  });

  // Add hover effect to service cards
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add hover effect to testimonial cards
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add hover effect to price cards
  const priceCards = document.querySelectorAll(".price-card");
  priceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.03)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Add hover effect to team cards
  const teamCards = document.querySelectorAll(".team-card");
  teamCards.forEach((card) => {
    const img = card.querySelector("img");
    card.addEventListener("mouseenter", function () {
      img.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", function () {
      img.style.transform = "scale(1)";
    });
  });
});
// Active navigation highlighting
document.addEventListener("DOMContentLoaded", function() {
    // Get current page (case insensitive)
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1).toLowerCase() || 'index.html';
    
    // Desktop navigation
    const navLinks = document.querySelectorAll('.hidden.md\\:flex a[href]');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        const linkPage = linkPath.substring(linkPath.lastIndexOf('/') + 1).toLowerCase();
        
        if (currentPage === linkPage) {
            link.classList.add('nav-link-active');
            // Remove the hover underline span since we have our own active indicator
            const span = link.querySelector('span');
            if (span) span.style.display = 'none';
        }
    });
    
    // Mobile navigation
    const mobileLinks = document.querySelectorAll('#mobile-menu a[href]');
    mobileLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        const linkPage = linkPath.substring(linkPath.lastIndexOf('/') + 1).toLowerCase();
        
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
    
    // Rest of your existing JavaScript...
});