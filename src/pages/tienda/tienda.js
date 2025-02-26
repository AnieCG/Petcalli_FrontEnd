import filtradoPorPrecio from "./funciones-filtrados/filtradoPrecio.js";
import getJson from "./funciones-filtrados/getProducts.js";
import filterProductsByPetType from "./funciones-filtrados/filtrado-petType.js";
import insertCarruselMasPopulares from "./components/carruselMasPopulares.js";

document.addEventListener("DOMContentLoaded", async () => {
  const productos = await getJson("/public/json/productos.json");
  const allProducts = await getJson("/public/json/productos.json");
  //Insertar carrusel
  insertCarruselMasPopulares();

  /*FILTRADO POR PRECIO */
  filtradoPorPrecio(productos);

  /*FILTRADO POR TIPO DE MASCOTA */
  filterProductsByPetType(productos);
});
