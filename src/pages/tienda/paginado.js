import createCards from "./createCards.js";
// Variables globales
const itemsPerPage = 6;
let currentPage = 1;
let productos = [];

// Obtener los elementos del DOM
const $seccionCards = document.getElementById("seccion-cards");
const $resultadosProductos = document.getElementById("resultados-productos");
const $counterProductsToShow = document.getElementById("counterProductsToShow");
const $prevPageButton = document.getElementById("prevPage");
const $nextPageButton = document.getElementById("nextPage");
const $pageNumberDisplay = document.getElementById("pageNumber");

// Función para mostrar los productos de una página específica
function showPage(page, productos) {
  // Calcular el rango de productos para la página actual
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = productos.slice(start, end);

  // Limpiar la sección de tarjetas
  $seccionCards.innerHTML = "";

  // Mostrar las tarjetas de los productos de la página actual
  pageItems.forEach((producto) => {
    $seccionCards.innerHTML += createCards(producto);
  });

  // Actualizar el contador de productos mostrados
  $counterProductsToShow.textContent = pageItems.length;
  $resultadosProductos.textContent = productos.length;

  // Actualizar el número de página actual en el contador
  $pageNumberDisplay.textContent = page;

  // Habilitar/deshabilitar los botones de paginación
  $prevPageButton.disabled = page === 1;
  $nextPageButton.disabled = page * itemsPerPage >= productos.length;
}

// Cargar los productos desde el archivo JSON
fetch("/public/json/productos.json")
  .then((productosResponse) => productosResponse.json())
  .then((productosData) => {
    productos = productosData; // Asignar los productos a la variable global

    // Mostrar la primera página de productos
    showPage(currentPage, productos);
  });

// Función para manejar el clic en el botón "Anterior"
$prevPageButton.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage, productos); // Mostrar los productos de la página anterior
  }
};

// Función para manejar el clic en el botón "Siguiente"
$nextPageButton.onclick = () => {
  const totalPages = Math.ceil(productos.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage, productos); // Mostrar los productos de la siguiente página
  }
};
