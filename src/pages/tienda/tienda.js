import { showPage, updatePagination } from "./funciones-filtrados/paginado.js"; //  Módulo de paginación
import getJson from "./funciones-filtrados/getProducts.js";
import insertCarruselMasPopulares from "./components/carruselMasPopulares.js";
import filtradoTag from "./funciones-filtrados/filtroTag.js";
import mostrarProductos from "./funciones-filtrados/mostrarProductos.js";
import insertQueryProducts from "./funciones-filtrados/insertQueryProducts.js";
import setItemLocalStorage from "./funciones-filtrados/setItemLocalStorage.js";
import alertaAgregado from "./components/alertaAgregado.js";
import counters from "./funciones-filtrados/countersBrandCategory.js";
import filtrosActivos from "./components/filtrosActivos.js";


const $span = document.getElementsByClassName("price-value");
const counterProductsToShow = document.getElementById("counterProductsToShow");
const productsTotal = document.getElementById("poductsTotal");

// Constantes para paginación
const $prevPageButton = document.getElementById("prevPage");
const $nextPageButton = document.getElementById("nextPage");
const $pageNumberDisplay = document.getElementById("pageNumber");

let products = [];
let filterProducts = [];
// Variables para paginación
let currentPage = 1;  // Página actual
const itemsPerPage = 9;  // Número de productos por página

async function getProducts() {
  const objectProducts = await getJson("/public/json/productos.json");
  products = objectProducts;
  filterProducts = [...products]; // Inicializar con todos los productos
  showPageContent(); // Mostrar primera pagina
}

// Async para mostrar productos de pagina actual
async function showPageContent() {
  // Aplicamos los filtros a los productos
  let filteredProducts = products.filter((product) => {
    return (
      (!selectedFilters.petType || product.petType === selectedFilters.petType) &&
      (!selectedFilters.category.length || selectedFilters.category.includes(product.category)) &&
      (!selectedFilters.brand.length || selectedFilters.brand.includes(product.marca)) &&
      (!selectedFilters.price || parseFloat(product.price.replace(/[$,]/g, "")) <= parseFloat(selectedFilters.price))
    );
  });

  // Actualizamos los productos a mostrar según la página actual
  const pageItems = showPage(currentPage, itemsPerPage, filteredProducts);

  // Limpiamos y mostramos los productos
  mostrarProductos(pageItems);
  counterProductsToShow.innerHTML = pageItems.length;
  productsTotal.innerHTML = filteredProducts.length;

  // Actualizamos los botones de paginación
  updatePagination(currentPage, filteredProducts, itemsPerPage, $prevPageButton, $nextPageButton, $pageNumberDisplay);
}

// Función para manejar los clics en el botón "Anterior"
$prevPageButton.onclick = (event) => {
  event.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    showPageContent(); // Mostrar la página anterior con los productos filtrados
  }
};

// Función para manejar los clics en el botón "Siguiente"
$nextPageButton.onclick = (event) => {
  event.preventDefault();
  currentPage++;
  showPageContent(); // Mostrar la siguiente página con los productos filtrados
};
// Hasta aqui paginado

await getProducts();

insertCarruselMasPopulares(filterProducts);
counterProductsToShow.innerHTML = filterProducts.length;
productsTotal.innerHTML = filterProducts.length;

let selectedFilters = {
  petType: null,
  category: [],
  brand: [],
  price: null,
};

const usuarioGuardado = JSON.parse(localStorage.getItem("producto"));
console.log(usuarioGuardado);

console.log(window.location.href);
function updateFilters() {
  let filteredProducts = products.filter((product) => {
    return (
      (!selectedFilters.petType ||
        product.petType === selectedFilters.petType) &&
      (!selectedFilters.category.length ||
        selectedFilters.category.includes(product.category)) &&
      (!selectedFilters.brand.length ||
        selectedFilters.brand.includes(product.marca)) &&
      (!selectedFilters.price ||
        parseFloat(product.price.replace(/[$,]/g, "")) <=
          parseFloat(selectedFilters.price))
    );
  });

  mostrarProductos(filteredProducts);
  counterProductsToShow.innerHTML = filteredProducts.length;
  counters(filteredProducts);
  showPageContent(); // funcion para paginado
}
// Eventos que activan los filtros en tiempo real
document
  .querySelectorAll(".form-range")[1]
  .addEventListener("input", (event) => {
    selectedFilters.price = event.target.value
      ? parseFloat(event.target.value)
      : null;
    let maxPrice = parseInt(event.target.value);
    $span[1].innerHTML = `$ ${maxPrice}`;
    console.log(selectedFilters);
    updateFilters();
    filtrosActivos(selectedFilters);
  });
document
  .querySelectorAll(".form-range")[0]
  .addEventListener("input", (event) => {
    selectedFilters.price = event.target.value
      ? parseFloat(event.target.value)
      : null;
    let maxPrice = parseInt(event.target.value);
    $span[0].innerHTML = `$ ${maxPrice}`;
    console.log(selectedFilters);
    updateFilters();
    filtrosActivos(selectedFilters);
  });

document.querySelectorAll(".petCategory").forEach((button) => {
  button.addEventListener("click", (event) => {
    document
      .querySelectorAll(".petCategory")
      .forEach((btn) => btn.classList.remove("selected"));
    selectedFilters.petType = event.currentTarget.value || null;
    event.currentTarget.classList.add("selected");
    updateFilters();
    filtrosActivos(selectedFilters);
  });
});

document.querySelectorAll(".brand").forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      selectedFilters.brand.push(event.target.value);
    } else {
      selectedFilters.brand = selectedFilters.brand.filter(
        (brand) => brand !== event.target.value
      );
    }
    updateFilters();
    filtrosActivos(selectedFilters);
  });
});

document.querySelectorAll(".category").forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      selectedFilters.category.push(event.target.value);
    } else {
      selectedFilters.category = selectedFilters.category.filter(
        (category) => category !== event.target.value
      );
    }
    updateFilters();
    filtrosActivos(selectedFilters);
  });
});

document.querySelectorAll(".tags").forEach((input) => {
  input.addEventListener("click", () => {
    filterProducts = filtradoTag(filterProducts, input);
    mostrarProductos(filterProducts);
    counterProductsToShow.innerHTML = filterProducts.length;
    filterProducts = [...products];
    filtrosActivos(selectedFilters);
  });
});
//cargar elementos al local storage
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("comprar-button")) {
    setItemLocalStorage(event, products);
    alertaAgregado();
  }
});

document.addEventListener(
  "DOMContentLoaded",
  insertQueryProducts(filterProducts)
);


