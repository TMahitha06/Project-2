// Hamburger toggle for mobile nav
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simple form submission handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  formMessage.style.color = 'green';
  contactForm.reset();
});
