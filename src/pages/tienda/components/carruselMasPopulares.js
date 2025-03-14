const $seccionCarrusel = document.getElementById("seccionCarrusel");

export default function insertCarruselMasPopulares(producto) {
  $seccionCarrusel.innerHTML = `
    <section class="row">
          <h2 id="tituloCarrusel" class="text-center mb-4">Más Populares</h2>
          <div id="mostPopularContainer" class="container col-11">
            <div class="container col-11 mt-5 mb-5">
              <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                      <div class="col-md-4 col-sm-6">
                        <a href="/src/pages/tienda/tienda.html">
                          <div class="card">
                            <img src="https://m.media-amazon.com/images/I/71BsEhRcf+L._AC_SL1500_.jpg" class="img-fluid"
                              alt="Dos medallas redondas con código QR" />
                          </div>
                        </a>
                      </div>
                      <div class="col-md-4 col-sm-6">
                        <a href="/src/pages/tienda/tienda.html">
                          <div class="card data-bs-toggle="modal" data-bs-target="#${producto.id=48}"">
                            <img src="https://m.media-amazon.com/images/I/61PNxgt963L._AC_SL1500_.jpg" class="img-fluid"
                              alt="Dos jeringas de uso especial para instalación de microchip de localización con mascotas o animales de fondo" />
                          </div>
                        </a>
                      </div>
                      <div class="col-md-4 col-sm-6">
                        <a href="/src/pages/servicios/servicios.html">
                          <div class="card">
                            <img src="/public-images/estetica2.png" class="img-fluid"
                              alt="Estetica canina con dos tinas y dos trabajadoras con uniforme verde bañando un perro cada una" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="col-md-4 col-sm-6">
                        <a href="/src/pages/tienda/tienda.html">
                          <div class="card">
                            <img src="https://m.media-amazon.com/images/I/51K5hxWS5PL._AC_SL1000_.jpg" class="img-fluid"
                              alt="Botella tipo atomizador color blanca de aceite de salmon con un filete de salmon al pie" />
                          </div>
                        </a>
                      </div>
                      <div class="col-md-4 col-sm-6">
                        <a href="/src/pages/servicios/servicios.html">
                          <div class="card">
                            <img
                              src="https://www.consalud.es/animalcare/uploads/s1/25/04/50/3/mascotas.jpeg"
                              class="img-fluid"
                              alt="Banner de servicio especializado para mascotas exoticas una piton amarilla como fondo" />
                          </div>
                        </a>
                      </div>
                      <div class="col-md-4 col-sm-6">
                        <a href="/src/pages/servicios/servicios.html">
                          <div class="card">
                            <img
                              src="https://scontent.fcvj2-2.fna.fbcdn.net/v/t1.6435-9/53886958_852553138411360_4738795970689499136_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZEc1pwUkHnAQ7kNvgGLXKw2&_nc_oc=AdiqhRMH4z5bpW-qB1JO-_eOrQ1WpGSXeOXi_7cOQYgCI43y4Uk4gkKdrkmdi0iQ95s&_nc_zt=23&_nc_ht=scontent.fcvj2-2.fna&_nc_gid=AvYaNMafZxUwKW1Fbd3BEju&oh=00_AYC3QUXYcE3QtwjplDk4FYW15qe7MKWDE2EQwoPstXtARg&oe=67D4499E"
                              class="img-fluid"
                              alt="Banner de residencia de animales exoticos con una imagen de jaula, pericos, hámsters" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="envolventeBoton rounded-circle carousel-control-prev" type="button"
                  data-bs-target="#productCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Anterior</span>
                </button>
  
                <button class="envolventeBoton rounded-circle carousel-control-next" type="button"
                  data-bs-target="#productCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Siguiente</span>
                </button>
              </div>
  
            </div>
          </div>
  
        </section>`;
}
