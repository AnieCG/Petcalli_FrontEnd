import getJson from "./funciones-filtrados/getProducts.js";
import insertCarruselMasPopulares from "./components/carruselMasPopulares.js";
import filtradoTag from "./funciones-filtrados/filtroTag.js";
import mostrarProductos from "./funciones-filtrados/mostrarProductos.js";
import insertQueryProducts from "./funciones-filtrados/insertQueryProducts.js";
import setItemLocalStorage from "./funciones-filtrados/setItemLocalStorage.js";
insertCarruselMasPopulares();

const $span = document.getElementsByClassName("price-value");
const counterProductsToShow = document.getElementById("counterProductsToShow");
const productsTotal = document.getElementById("poductsTotal");

let products = [];
let filterProducts = [];

async function getProducts() {
  const objectProducts = await getJson("/public/json/productos.json");
  products = objectProducts;
  filterProducts = [...products]; // Inicializar con todos los productos
}

await getProducts();

counterProductsToShow.innerHTML = filterProducts.length;
productsTotal.innerHTML = filterProducts.length;

let selectedFilters = {
  petType: null,
  category: [],
  brand: [],
  price: null,
};
//cargar elementos al local storage
document.addEventListener("click", (event) => {
  setItemLocalStorage(event, products);
});

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

document.querySelectorAll(".tags").forEach((input) => {
  input.addEventListener("click", () => {
    filterProducts = filtradoTag(filterProducts, input);
    mostrarProductos(filterProducts);
    counterProductsToShow.innerHTML = filterProducts.length;
    filterProducts = [...products];
  });
});
document.addEventListener(
  "DOMContentLoaded",
  insertQueryProducts(filterProducts)
);
