const insertHeader = () => {
  const contenedorHeader = document.getElementById("header");
  contenedorHeader.innerHTML = `
    <nav id="navbar"></nav>
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
