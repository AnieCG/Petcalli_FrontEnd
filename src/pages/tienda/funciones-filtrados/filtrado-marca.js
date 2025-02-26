const categoryCheck = document.getElementsByClassName("category");
const categoryCounter = document.getElementsByClassName("categoryCounter");
const brandCheck = document.getElementsByClassName("brand");
const brandCounter = document.getElementsByClassName("brandCounter");
const counterProductsToShow = document.getElementById("counterProductsToShow");

let selectedCategories = [];
let selectedBrands = [];

const filterProductsByBrandAndCategory = (
  selectedBrands,
  selectedCategories,
  brandCheck,
  categoryCheck
) => {
  fetch("/public/json/productos.json")
    .then((response) => response.json())
    .then((products) => {
      // Filtrar productos por marcas y categorías seleccionadas
      const productsToShow = products.filter(
        (product) =>
          selectedBrands.includes(product.marca) ||
          selectedCategories.includes(product.category)
      );

      // Sección de tarjetas con productos filtrados
      $seccionCards.innerHTML = productsToShow
        .map((card) => createCards(card))
        .join("");
      // Actualizar los contadores de cada checkbox
      //marca
      Array.from(brandCheck).forEach((checkbox, index) => {
        const brandName = checkbox.value;
        const counter = brandCounter[index];

        // Contar productos de cada marca individualmente
        const count = products.filter(
          (product) => product.marca === brandName
        ).length;

        // Si la marca está seleccionada, mostrar la cantidad; si no, dejar en 0
        counter.textContent = selectedBrands.includes(brandName) ? count : 0;
      });
      //category
      Array.from(categoryCheck).forEach((checkbox, index) => {
        const categoryName = checkbox.value;
        const counter = categoryCounter[index];

        // Contar productos de cada marca individualmente
        const count = products.filter(
          (product) => product.category === categoryName
        ).length;

        // Si la categoria está seleccionada, mostrar la cantidad; si no, dejar en 0
        counter.textContent = selectedCategories.includes(categoryName)
          ? count
          : 0;
      });
      //Muestra el numero de productos seleccionados de categoria y marca
      counterProductsToShow.textContent = productsToShow.length;
    });
};

/* FILTRADO POR MARCAS */
// Obtener checkboxes y contadores

// Estado de marcas seleccionadas

// Evento para cada checkbox
Array.from(brandCheck).forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const brandName = checkbox.value;

    if (checkbox.checked) {
      selectedBrands.push(brandName);
    } else {
      selectedBrands = selectedBrands.filter((brand) => brand !== brandName);
    }

    // Actualizar productos y contadores de todas las marcas seleccionadas
    filterProductsByBrandAndCategory(
      selectedBrands,
      selectedCategories,
      brandCheck,
      categoryCheck
    );
  });
});

// Inicializar contadores en 0
Array.from(brandCounter).forEach((counter) => {
  counter.textContent = 0;
});
Array.from(categoryCheck).forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const categoryName = checkbox.value;
    if (checkbox.checked) {
      // Si está seleccionado
      selectedCategories.push(categoryName);
    } else {
      // Si está desmarcado
      selectedCategories = selectedCategories.filter(
        (brand) => brand !== categoryName
      );
    }
    // Productos según las marcas
    filterProductsByBrandAndCategory(
      selectedBrands,
      selectedCategories,
      brandCheck,
      categoryCheck
    );
  });
});
Array.from(categoryCounter).forEach((counter) => {
  counter.textContent = 0;
});
