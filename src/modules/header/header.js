const insertHeader = () => {
  const contenedorHeader = document.getElementById("header");
  contenedorHeader.innerHTML = `
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
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tienda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Servicios</a>
            </li>
            <li class="nav-item li-item">
              <a class="nav-link" href="/src/pages/about/Acerca_de_nosotros.html">Sobre nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/src/pages/contact-us/contact-us.html">Contacto</a>
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

          <button class="btn" type="button" href="#">
            <img src="/public/images/user.svg" alt="icono de usuario" />
          </button>
        </div>
      </div>
    </nav>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 d-flex flex-column pt-5">
            <h1 class="text-center text-md-center text-lg-start">Petcalli</h1>
            <p class="mx-auto mx-md-auto mx-lg-0 text-center text-md-center text-lg-start fs-4 col-9 pt-3">
              "Porque en el corazón de nuestra tienda está el compromiso de
              cuidar a tu mascota tanto como tú lo haces”
            </p>
            <div class="pt-3 text-center text-md-center text-lg-start">
              <a href="#">
                <button type="button" id="botonCompra" class="btn btn-primary btn-lg fs-5 text">
                  Comprar
                </button>
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex flex-column">
            <img class="container-fluid mt-auto" src="/public-images/dog-header.PNG"
              alt="Perro crestado rodesiano asomando la cabeza" />
          </div>
        </div>
      </div>
    </section>`;
};

insertHeader();
