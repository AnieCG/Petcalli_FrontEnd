document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailLogin = document.getElementById("email").value.trim();
  const passwordLogin = document.getElementById("password").value.trim();

  // Recuperar el usuario almacenado en localStorage
  const usuarioGuardado = JSON.parse(localStorage.getItem("user"));
  


  if (!usuarioGuardado) {
    alert("No hay usuarios registrados.");
    return;
  }

  if (usuarioGuardado.email === emailLogin && usuarioGuardado.password === passwordLogin) {
    alert("Inicio de sesión exitoso!");
    window.location.href = "/Index.html"; 
  } else {
    alert("Email o contraseña incorrectos.");
  }

  
});


