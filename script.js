document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            submitContactForm();
        });
    }
    
    const navButton = document.getElementById('navButton');
    const closeButton = document.getElementById('closeButton');
    const navMenu = document.getElementById('navMenu');

    if (navButton) {
        navButton.addEventListener('click', function() {
            navMenu.style.left = '0px';
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            navMenu.style.left = '-400px';
        });
    }
});


function submitContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formData = new FormData(contactForm);

    fetch('https://script.google.com/macros/s/AKfycbxRKbTD9xwYccskRJfxZvtMQqm4QBnF_-0xwSZNYk-fBq2uBr1aToIfCeiYDXCbQIf4/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted successfully', data);
        window.location.href = 'thank-you.html';
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
    });
}