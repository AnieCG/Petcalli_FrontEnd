// Para checkbox
// Para contadores
const brandCounter = document.getElementsByClassName("brandCounter");
let selectedBrands = [];

export default function filterProductsByMarca(products, input, index) {
  const counter = brandCounter[index];

  if (input.checked) {
    selectedBrands.push(input.value);
  } else {
    selectedBrands = selectedBrands.filter((brand) => brand !== input.value);
  }

  return (products = products.filter((product) => {
    console.log(selectedBrands);

    return selectedBrands.includes(product.marca);
  }));
}
/* FILTRADO POR MARCAS */
// Función para filtrar productos por marca
// export default function filterProductsByMarca(products, input) {
//   console.log(input.value);

//   // ponerle el parametro de products en luga del fetch
//   //fetch("/public/json/productos.json")
//   // .then((response) => response.json())
//   // .then((products) => {
//   // Filtrar productos por marcas seleccionadas
//   const productsToShow = products.filter(
//     (product) => selectedBrands.includes(product.marca) // agregar un or
//   );

//   // Actualizar el contador con el número de productos filtrados
//   counter.textContent = productsToShow.length;
// }
// // Para aplicar funcion
// let selectedBrands = [];

// // Cambio para cada checkbox de marca
// Array.from(brandCheck).forEach((checkbox, index) => {
//   checkbox.addEventListener("change", () => {
//     const brandName = checkbox.value;
//     const counter = brandCounter[index];

//     if (checkbox.checked) {
//       // Si está seleccionado
//       selectedBrands.push(brandName);
//     } else {
//       // Si está desmarcado
//       selectedBrands = selectedBrands.filter((brand) => brand !== brandName);
//     }

//     // Productos según las marcas
//     filterProductsByMarca(selectedBrands, counter);
//   });
// });

// // Llamar a la función para cargar las marcas seleccionadas al inicio
// filterProductsByMarca(selectedBrands, brandCounter[0]);
