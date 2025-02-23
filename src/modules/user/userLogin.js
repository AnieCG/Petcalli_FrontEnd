document.addEventListener("DOMContentLoaded", function () {
  const buttonUser = document.getElementById("btn-user");
  const usuarioGuardado = JSON.parse(localStorage.getItem("user"));

  if (usuarioGuardado.name) {
    buttonUser.innerHTML = `
    <div class="btn-group">
   <img src="/public/images/user-in.png" alt="icono de usuario" id="icon-user"/>
  <button class="btn dropdown-toggle button-user" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${usuarioGuardado.name}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
  </ul>
</div>`;
  }
});
