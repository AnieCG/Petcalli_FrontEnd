document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailLogin = document.getElementById("email").value.trim();
    const passwordLogin = document.getElementById("password").value.trim();
    const vendedorGuardado = JSON.parse(localStorage.getItem("seller"));

    if (!vendedorGuardado) {
      alert("No hay usuarios registrados.");
      return;
    }

    if (
      vendedorGuardado.email === emailLogin &&
      vendedorGuardado.password === passwordLogin
    ) {
      alert("Inicio de sesión exitoso!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/Index.html";
    } else {
      alert("Email o contraseña incorrectos.");
    }
  });
