import filtradoPorPrecio from "./funciones-filtrados/filtradoPrecio.js";
import getJson from "./funciones-filtrados/getProducts.js";
import filterProductsByPetType from "./funciones-filtrados/filtrado-petType.js";
import insertCarruselMasPopulares from "./components/carruselMasPopulares.js";
import filtradoTag from "./funciones-filtrados/filtroTag.js";
import mostrarProductos from "./funciones-filtrados/mostrarProductos.js";
import filterProductsByMarca from "./funciones-filtrados/filtrado-marca.js";
import filterProductsByCategory from "./funciones-filtrados/categoryFilter.js";

insertCarruselMasPopulares();

let products = [];
let filterProducts = [];

async function getProducts() {
  const objectProducts = await getJson("/public/json/productos.json");
  products = objectProducts;
  filterProducts = [...products]; // Inicializar con todos los productos
  mostrarProductos(filterProducts);
}

await getProducts();

// 🔹 Eventos que activan los filtros en tiempo real
document.querySelectorAll(".form-range").forEach((input) => {
  input.addEventListener("input", () => {
    filterProducts = filtradoPorPrecio(filterProducts, input);
    mostrarProductos(filterProducts);
    filterProducts = [...products];
  });
});

document.querySelectorAll(".petCategory").forEach((button) => {
  button.addEventListener("click", () => {
    filterProducts = filterProductsByPetType(filterProducts, button);
    mostrarProductos(filterProducts);
    filterProducts = [...products];
  });
});

document.querySelectorAll(".tags").forEach((input) => {
  input.addEventListener("click", () => {
    filterProducts = filtradoTag(filterProducts, input);
    mostrarProductos(filterProducts);
    filterProducts = [...products];
  });
});

document.querySelectorAll(".brand").forEach((input, index) => {
  input.addEventListener("change", () => {
    filterProducts = filterProductsByMarca(filterProducts, input, index);
    mostrarProductos(filterProducts);
    filterProducts = [...products];
  });
});

document.querySelectorAll(".category").forEach((input, index) => {
  input.addEventListener("change", () => {
    filterProducts = filterProductsByCategory(filterProducts, input, index);
    mostrarProductos(filterProducts);
    filterProducts = [...products];
  });
});