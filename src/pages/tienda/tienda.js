import filtradoPorPrecio from "./funciones-filtrados/filtradoPrecio.js";
import getJson from "./funciones-filtrados/getProducts.js";
import filterProductsByPetType from "./funciones-filtrados/filtrado-petType.js";
import insertCarruselMasPopulares from "./components/carruselMasPopulares.js";
import createCards from "./components/createCards.js";
import filtradoTag from "./funciones-filtrados/filtroTag.js";
const $seccionCards = document.getElementById("seccion-cards");

insertCarruselMasPopulares();

let products = [];
let filterProducts = [];

async function getProducts() {
  const objectProducts = await getJson("/public/json/productos.json");
  products = objectProducts;
}

await getProducts();

$seccionCards.innerHTML = products.map((card) => createCards(card)).join("");

filtradoPorPrecio(products);

filterProductsByPetType(products);

filtradoTag(products);

document.addEventListener("DOMContentLoaded", async () => {
  // const productos = await getJson("/public/json/productos.json");
  // const allProducts = await getJson("/public/json/productos.json");
  //Insertar carrusel
});
