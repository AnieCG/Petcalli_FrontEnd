document.addEventListener("DOMContentLoaded", function () {
    const buttonUser = document.getElementById("btn-user");
    const vendedorGuardado = JSON.parse(localStorage.getItem("seller"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  
    if (vendedorGuardado && isLoggedIn === "true" ) {
      buttonUser.innerHTML = `
      <div class="btn-group">
        <a href="/src/pages/login/loginUser.html">
          <img src="/public/images/user-in.png" alt="icono de usuario" id="icon-user"/>
        </a>
        <button class="btn dropdown-toggle button-user" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          ${vendedorGuardado.name}
        </button>
        <ul class="dropdown-menu">
          <li><a id="logout" class="dropdown-item" href="#">Cerrar sesión</a></li>
          <li><a class="dropdown-item" href="/src/pages/formProduct/formProduct.html">Tus Productos</a></li>
        </ul>
      </div>`;
  
      document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("seller");
        localStorage.removeItem("isLoggedIn");
        window.location.href = "/Index.html";
      });
    } 
  });
  