// validacion inicio de sesion temporal
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      } else {
          event.preventDefault(); // se muestra un alert hasta que tengamos backend y lo vea en la base de datos
          alert('Bienvenido usuario...');
      }

      form.classList.add('was-validated');
  });
});

  // Validación de correo para recuperar contraseña

  document.getElementById('sendResetEmail').addEventListener('click', () => {
    const resetEmail = document.getElementById('resetEmail');
    if (!resetEmail.checkValidity()) {
      resetEmail.classList.add('is-invalid');
    } else {
      resetEmail.classList.remove('is-invalid');
      alert('Correo enviado...'); // igual envia alert hasta tener una base.
    }
  });