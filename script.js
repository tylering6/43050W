document.addEventListener('DOMContentLoaded', function() {
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitContactForm();
    });
});


function submitContactForm() {
    const number = document.getElementById('number').value;
    const school = document.getElementById('school').value;
    const contact = document.getElementById('contact').value;
    const stakes = document.getElementById('stakes').value;
    const elevate = document.getElementById('elevate').value;
    const high = document.getElementById('high').value;
    const record = document.getElementById('record').value;
    const info = document.getElementById('info').value;

    const formData = {
        Number: number,
        School: school,
        Contact: contact,
        Stakes: stakes,
        Elevate: elevate,
        High: high,
        Record: record,
        Info: info
    };

    fetch('https://script.google.com/macros/s/AKfycbyHyJGLa5L2jNpNEGlKCgFX-zSuzSvVuXY1hGL49HH5ivBf6ApUMb_dh1O668su1pBv/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        console.log('Form submitted successfully');
        alert('Thank you for contacting us!');
        contactForm.reset();
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
    });
}