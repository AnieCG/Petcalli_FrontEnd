document.getElementById("loginForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const emailLogin = document.getElementById("email").value.trim();
  const passwordLogin = document.getElementById("password").value.trim();

  try {
    
      const response = await fetch("http://localhost:8080/api/v1/users/login", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: emailLogin,
              password: passwordLogin
          })
      });

      if (response.ok) {
          const usuario = await response.json();
          
  
          if (usuario.email === emailLogin && usuario.password === passwordLogin) {
              alert("Inicio de sesión exitoso!");
              localStorage.setItem("isLoggedIn", "true");
              localStorage.setItem("user", JSON.stringify(usuario)); // Guarda el usuario en localStorage si es necesario
              window.location.href = "/Index.html";
          } else {
              alert("Email o contraseña incorrectos.");
          }
      } else {
          alert("Error en el inicio de sesión. Verifica tus credenciales.");
      }
  } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      alert("Ocurrió un error en el servidor.");
  }
});