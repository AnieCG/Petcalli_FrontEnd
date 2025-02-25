const $seccionCards = document.getElementById("seccion-cards");
const $resultadosProductos = document.getElementById("resultados-productos");
const counterProductsToShow = document.getElementById("counterProductsToShow");

const insertCarruselMasPopulares = () => {
  const seccionCarrusel = document.getElementById("seccionCarrusel");
  seccionCarrusel.innerHTML = `
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
                        <div class="card">
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
                            src="https://laboticaanimal.com/wp-content/uploads/2024/01/Imagen-de-WhatsApp-2024-01-15-a-las-00.56.52_35b57605.jpg"
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
};
insertCarruselMasPopulares();

const createCards = (producto) => {
  return `
    
    <div class="card h-150 m-2" style="width:16rem;">
      <img
        src="${producto.image}"
        class="card-img-top"
        alt="Imagen de producto"
        id="image"
        />
        <div class="card-body">
        <h5 class="card-title" id="nombre-producto">${producto.title}</h5>
        <p>${producto.description}</p>
        <p id="precio">${producto.price}</p>
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${producto.id}"
        >Ver producto</button>
        </div>
    </div>

`;
};

fetch("/public/json/productos.json")
  .then((productos) => productos.json())
  .then((productos) => {
    $seccionCards.innerHTML = productos
      .map((card) => createCards(card))
      .join("");
    $resultadosProductos.textContent = productos.length;
    counterProductsToShow.textContent = productos.length;
    console.log($resultadosProductos);
  });

const filterProductsByPetType = (petType) => {
  fetch("/public/json/productos.json")
    .then((products) => products.json())
    .then((products) => {
      const productsToShow = products.filter(
        (product) => product.petType === petType
      );
      $seccionCards.innerHTML = productsToShow
        .map((card) => createCards(card))
        .join("");
    });
};

const filterProductsByBrandAndCategory = (selectedBrands, selectedCategories /* counter */) => {
  fetch("/public/json/productos.json")
    .then((response) => response.json())
    .then((products) => {
      // Filtrar productos por marcas y categorías seleccionadas
      const productsToShow = products.filter( product =>
        selectedBrands.includes(product.marca) || selectedCategories.includes(product.category)
      );

      // Sección de tarjetas con productos filtrados
      $seccionCards.innerHTML = productsToShow
        .map((card) => createCards(card))
        .join("");
      // Actualizar el contador con el número de productos filtrados
      //counter.textContent = productsToShow.length;
      counterProductsToShow.textContent = productsToShow.length;
    });
};

const catsButton = document.getElementsByClassName("Gatos");
const dogsButton = document.getElementsByClassName("Perros");
const birdsButton = document.getElementsByClassName("Aves");
const rabbitsButton = document.getElementsByClassName("Conejos");
const fishesButton = document.getElementsByClassName("Peces");
const otherButton = document.getElementsByClassName("Otros");

catsButton[0].addEventListener("click", () => {
  filterProductsByPetType("Gato");
});
dogsButton[0].addEventListener("click", () => {
  filterProductsByPetType("Perro");
});
rabbitsButton[0].addEventListener("click", () => {
  filterProductsByPetType("Conejo");
});
fishesButton[0].addEventListener("click", () => {
  filterProductsByPetType("Peces");
});
birdsButton[0].addEventListener("click", () => {
  filterProductsByPetType("Aves");
});
otherButton[0].addEventListener("click", () => {
  filterProductsByPetType("Otros");
});

catsButton[1].addEventListener("click", () => {
  filterProductsByPetType("Gato");
});
dogsButton[1].addEventListener("click", () => {
  filterProductsByPetType("Perro");
});
rabbitsButton[1].addEventListener("click", () => {
  filterProductsByPetType("Conejo");
});
fishesButton[1].addEventListener("click", () => {
  filterProductsByPetType("Peces");
});
birdsButton[1].addEventListener("click", () => {
  filterProductsByPetType("Aves");
});
otherButton[1].addEventListener("click", () => {
  filterProductsByPetType("Otros");
});

const categoryCheck = document.getElementsByClassName("category");
const categoryCounter = document.getElementsByClassName("categoryCounter");
let selectedCategories = [];

Array.from(categoryCheck).forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    const categoryName = checkbox.value;
    const counter = categoryCounter[index];

    if (checkbox.checked) {
      // Si está seleccionado
      selectedCategories.push(categoryName);
    } else {
      // Si está desmarcado
      selectedCategories = selectedCategories.filter((brand) => brand !== categoryName);
    }
    // Productos según las marcas
    filterProductsByBrandAndCategory( selectedBrands, selectedCategories );
  });
});

//Seccion de filtrado por precio
const $inputFiltradoPrecios = document.getElementsByClassName("form-range");
const $priceValue = document.getElementsByClassName("price-value");

Array.from($inputFiltradoPrecios).forEach((input, index) => {
  input.addEventListener("input", function () {
    let maxPrice = parseInt(this.value);
    Array.from($priceValue)[index].textContent = `$ ${maxPrice}`;
    console.log(Array.from($priceValue)[index]);

    fetch("/public/json/productos.json")
      .then((products) => products.json())
      .then((products) => {
        const productsToShow = products.filter((product) => {
          let productPrice = parseFloat(product.price.replace(/[$,]/g, ""));
          return productPrice <= maxPrice;
        });
        $seccionCards.innerHTML = productsToShow
          .map((card) => createCards(card))
          .join("");
      });
  });
});
// Seccion de filtrado por tags

//      Botones de los tags
const tagJuguetes = document.getElementById("tagjuguetes");
const tagAlimento = document.getElementById("tagAlimento");
const tagNatural = document.getElementById("tagNatural");
const tagSalmón = document.getElementById("tagSalmón");
const tagCatnip = document.getElementById("tagCatnip");
const tagArnés = document.getElementById("tagArnés");
const tagCachorro = document.getElementById("tagCachorro");
const tagRueda = document.getElementById("tagRueda");

//     Funcion que me selecciona crea una lista
function lista(url) {
  ///"public/json/productos.json"
  let listaDeTodo = [];
  fetch(url)
    .then((productos) => productos.json())
    .then((productos) => {
      listaDeTodo.unshift(productos);
    });
  return listaDeTodo;
}

const listaProductos = lista("/public/json/productos.json");
//console.log(listaProductos);

// funcion que filtrado
const filtroTag = (tag, lista = []) => {
  let listaFiltrada = lista.filter(
    (product) =>
      product.description.includes(tag) ||
      product.title.includes(tag) ||
      product.category.includes(tag)
  );
  return listaFiltrada;
};

//   Acciones de los tags
tagJuguetes.addEventListener("click", () => {
  let juguetes = filtroTag("Juguetes", listaProductos[0]);
  $seccionCards.innerHTML = juguetes.map((card) => createCards(card)).join("");
});
tagAlimento.addEventListener("click", () => {
  let tag = filtroTag("Alimento", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagNatural.addEventListener("click", () => {
  let tag = filtroTag("Natural", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagSalmón.addEventListener("click", () => {
  let tag = filtroTag("Salm", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagCatnip.addEventListener("click", () => {
  let tag = filtroTag("Catnip", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagArnés.addEventListener("click", () => {
  let tag = filtroTag("Arn", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagCachorro.addEventListener("click", () => {
  let tag = filtroTag("Cachorro", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});
tagRueda.addEventListener("click", () => {
  let tag = filtroTag("Rueda", listaProductos[0]);
  $seccionCards.innerHTML = tag.map((card) => createCards(card)).join("");
});

/* FILTRADO POR MARCAS */
// Función para filtrar productos por marca
const filterProductsByMarca = (selectedBrands, counter) => {
  fetch("/public/json/productos.json")
    .then((response) => response.json())
    .then((products) => {
      // Filtrar productos por marcas seleccionadas
      const productsToShow = products.filter((product) =>
        selectedBrands.includes(product.marca)
      );

      // Sección de tarjetas con productos filtrados
      $seccionCards.innerHTML = productsToShow
        .map((card) => createCards(card))
        .join("");
      // Actualizar el contador con el número de productos filtrados
      counter.textContent = productsToShow.length;
    });
};

// Para checkbox
const brandCheck = document.getElementsByClassName("brand");
// Para contadores
const brandCounter = document.getElementsByClassName("brandCounter");

// Para aplicar funcion
let selectedBrands = [];

// Cambio para cada checkbox de marca
Array.from(brandCheck).forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    const brandName = checkbox.value;
    const counter = brandCounter[index];

    if (checkbox.checked) {
      // Si está seleccionado
      selectedBrands.push(brandName);
    } else {
      // Si está desmarcado
      selectedBrands = selectedBrands.filter((brand) => brand !== brandName);
    }

    // Productos según las marcas
    filterProductsByMarca(selectedBrands, counter);
  });
});

// Llamar a la función para cargar las marcas seleccionadas al inicio
//filterProductsByMarca(selectedBrands, brandCounter[0]);
