document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch('https://w-rizz.mvhsrobotics.org/sign-up.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        alert('Registration successful');
        window.location.href = 'https://w-rizz.mvhsrobotics.org/log-in.html';
    } else {
        alert('Registration failed');
    }
});

