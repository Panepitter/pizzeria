// No additional JavaScript needed for this section
// No JavaScript needed for this initial structure

// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// No additional JavaScript needed for this section
// Add any JavaScript code here if needed
// No additional JavaScript code needed for this section
// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// No JavaScript code needed for this section
// Contact form submission
const form = document.querySelector('#contact form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Send form data to server (replace with your own logic)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Reset form fields
  form.reset();

  // Show success message (replace with your own logic)
  alert('Thank you for your message!');
});