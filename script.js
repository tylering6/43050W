document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            submitContactForm();
        });
    }

    // Add event listener for mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
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
        window.location.href = 'Thank-You.html';
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
}