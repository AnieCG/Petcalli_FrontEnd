import filtradoPorPrecio from "./funciones-filtrados/filtradoPrecio.js";
import getJson from "./funciones-filtrados/getProducts.js";
import filterProductsByPetType from "./funciones-filtrados/filtrado-petType.js";
import insertCarruselMasPopulares from "./components/carruselMasPopulares.js";
const $seccionCards = document.getElementById("seccion-cards");
import createCards from "./components/createCards.js";

insertCarruselMasPopulares();

let products = [];
let filterProducts = [];
async function getProducts() {
  const plainProducts = await fetch("/public/json/productos.json");
  const objectProducts = await plainProducts.json();
  products = objectProducts;
}

await getProducts();
filtradoPorPrecio(products);

filterProductsByPetType(products);

document.addEventListener("DOMContentLoaded", async () => {
  // const productos = await getJson("/public/json/productos.json");
  // const allProducts = await getJson("/public/json/productos.json");
  //Insertar carrusel
});
