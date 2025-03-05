import getJson from "./funciones-filtrados/getProducts.js";
import insertCarruselMasPopulares from "./components/carruselMasPopulares.js";
import filtradoTag from "./funciones-filtrados/filtroTag.js";
import mostrarProductos from "./funciones-filtrados/mostrarProductos.js";
import insertQueryProducts from "./funciones-filtrados/insertQueryProducts.js";
import setItemLocalStorage from "./funciones-filtrados/setItemLocalStorage.js";
import alertaAgregado from "./components/alertaAgregado.js";
import counters from "./funciones-filtrados/countersBrandCategory.js";

const $span = document.getElementsByClassName("price-value");
const counterProductsToShow = document.getElementById("counterProductsToShow");
const productsTotal = document.getElementById("poductsTotal");

let products = [];
let filterProducts = [];

let selectedFilters = {
  petType: null,
  category: [],
  brand: [],
  price: null,
};

// Función para obtener los productos desde el archivo JSON
async function getProducts() {
  const objectProducts = await getJson("/public/json/productos.json");
  products = objectProducts;
  filterProducts = [...products]; // Inicializamos filterProducts con todos los productos

  // Insertamos el carrusel de productos populares (si es necesario)
  insertCarruselMasPopulares(filterProducts);
  counterProductsToShow.innerHTML = filterProducts.length;
  productsTotal.innerHTML = filterProducts.length;

  // Llamamos a la función para leer los filtros de la URL y aplicar el filtro
  getFiltersFromURL(); // Lee los filtros de la URL
  updateFilters(); // Aplica los filtros a los productos cargados
}

// Llamada a la función que obtiene los productos
await getProducts();

// Función que aplica los filtros a los productos
function updateFilters() {
  // Filtra los productos según los filtros seleccionados
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

  // Muestra los productos filtrados en la interfaz
  mostrarProductos(filteredProducts);

  // Actualiza los contadores
  counterProductsToShow.innerHTML = filteredProducts.length;
  productsTotal.innerHTML = filteredProducts.length;

  // Si es necesario, actualiza otros elementos (como marcas o categorías)
  counters(filteredProducts);
}

// Función que lee los filtros de la URL
function getFiltersFromURL() {
  const urlParams = new URLSearchParams(window.location.search);

  const categoryFilter = urlParams.get("category");
  console.log("Filtro de categoría en la URL:", categoryFilter); // Depuración

  if (categoryFilter) {
    selectedFilters.category = [categoryFilter]; // Asumiendo que solo se filtra por una categoría
  }

  const petFilter = urlParams.get("petType");
  console.log("Filtro de petType en la URL:", petFilter);

  if (petFilter) {
    selectedFilters.petType = petFilter;
  }

  // Llama a la función que aplica los filtros después de obtener los parámetros de la URL
  updateFilters();
}

// Función que actualiza la UI con los filtros de la URL
function updateUIWithFilters() {
  // Actualiza los checkboxes de la categoría según los filtros seleccionados
  document.querySelectorAll(".category").forEach((checkbox) => {
    checkbox.checked = selectedFilters.category.includes(checkbox.value);
  });
}

// Eventos que activan los filtros en tiempo real (rango de precios, categorías, marcas)
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
  });

// Evento para filtrar por tipo de mascota
document.querySelectorAll(".petCategory").forEach((button) => {
  button.addEventListener("click", (event) => {
    document
      .querySelectorAll(".petCategory")
      .forEach((btn) => btn.classList.remove("selected"));
    selectedFilters.petType = event.currentTarget.value || null;
    event.currentTarget.classList.add("selected");
    updateFilters();
  });
});

// Evento para filtrar por marca
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
  });
});

// Evento para filtrar por categoría (checkbox)
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
  });
});

// Evento para filtrar por etiquetas (tags)
document.querySelectorAll(".tags").forEach((input) => {
  input.addEventListener("click", () => {
    filterProducts = filtradoTag(filterProducts, input);
    mostrarProductos(filterProducts);
    counterProductsToShow.innerHTML = filterProducts.length;
    filterProducts = [...products]; // Restauramos el array original de productos después de aplicar el filtro
  });
});

// Cargar productos en el localStorage cuando el usuario haga clic en "comprar"
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("comprar-button")) {
    setItemLocalStorage(event, products);
    alertaAgregado();
  }
});

// Insertar productos filtrados cuando se carga la página
document.addEventListener("DOMContentLoaded", () =>
  insertQueryProducts(filterProducts)
);
