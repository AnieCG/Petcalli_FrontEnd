const insertNav = () => {
  const navBar = document.getElementById("navbar");
  navBar.innerHTML = `
     <nav class="navbar navbar-expand-lg navegacion">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/public/images/Logo-shape.svg" alt="logo de tienda petcalli con una huella de mascota" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mr-lg-5">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/src/pages/tienda/tienda.html">Tienda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/src/pages/servicios/servicios.html">Servicios</a>
          </li>
          <li class="nav-item li-item">
            <a class="nav-link" href="/src/pages/about/Acerca_de_nosotros.html">Acerca de nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/src/pages/contact-us/contact-us.html">Contáctanos</a>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <div class="input-group">
            <input class="form-control input" type="search" placeholder="buscar productos"
              aria-label="buscar productos" />
            <button class="btn boton-buscar" type="submit">
              <img src="/public/images/share.svg" alt="buscar" />
            </button>
          </div>
        </form>

        <button class="btn" type="button" href="#">
          <img src="/public/images/like-products.svg" alt="icono de favoritos" />
        </button>

        <button class="btn" type="button" href="#">
          <img src="/public/images/shopping-cart.svg" alt="icono de carrito" />
        </button>

        <button class="btn" type="button" href="">
          <img src="/public/images/user.svg" alt="icono de usuario" />
        </button>
      </div>
    </div>
  </nav>
    `;
};

insertNav();
