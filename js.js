document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Validate email and password
    if (email === 'irvingyahir@gmail.com' && password === 'password') {
        alert('¡Inicio de sesión exitoso!');
    } else {
        alert('Email o contraseña no válidos');
    }
});
