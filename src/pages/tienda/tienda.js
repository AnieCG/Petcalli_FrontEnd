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

let selectedFilters = {
  petType: null,
  category: [],
  brand: [],
  price: null
};

function updateFilters() {
  let filteredProducts = products.filter(product => {
    return (!selectedFilters.petType || product.petType === selectedFilters.petType) &&
           (!selectedFilters.category.length || selectedFilters.category.includes(product.category)) &&
           (!selectedFilters.brand.length || selectedFilters.brand.includes(product.marca)) &&
           (!selectedFilters.price || parseFloat(product.price.replace(/[$,]/g, "")) <= parseFloat(selectedFilters.price));
  });

  mostrarProductos(filteredProducts);
};
console.log(document.querySelectorAll(".petCategory"));

// Eventos que activan los filtros en tiempo real
document.querySelectorAll(".form-range")[1].addEventListener("input", (event) => {
  selectedFilters.price = event.target.value ? parseFloat(event.target.value) : null;
  console.log(selectedFilters);
  updateFilters();
});
document.querySelectorAll(".form-range")[0].addEventListener("input", (event) => {
  selectedFilters.price = event.target.value ? parseFloat(event.target.value) : null;
  console.log(selectedFilters);
  updateFilters();
});


document.querySelectorAll(".petCategory").forEach((button) => {
  button.addEventListener("click", (event) => {
    //document.querySelectorAll(".petCategory").forEach(btn => btn.classList.remove("selected"));
    selectedFilters.petType = event.currentTarget.value || null;
    event.currentTarget.classList.add("selected");
    console.log("Updated Filters (Pet Type):", selectedFilters);
    updateFilters();
  });
});

document.querySelectorAll(".brand").forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      selectedFilters.brand.push(event.target.value);
    } else {
      selectedFilters.brand = selectedFilters.brand.filter(brand => brand !== event.target.value);
    }
    console.log(selectedFilters);
    updateFilters();
  });
});

document.querySelectorAll(".category").forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      selectedFilters.category.push(event.target.value);
    } else {
      selectedFilters.category = selectedFilters.category.filter(category => category !== event.target.value);
    }
    console.log(selectedFilters);
    updateFilters();
  });
});