// This file contains JavaScript functionality for the website, including form validation for the contact form and any interactive elements.

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (validateForm(name, email, message)) {
                // Here you would typically send the form data to a server
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }

    function validateForm(name, email, message) {
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});