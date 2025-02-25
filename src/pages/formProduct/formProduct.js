import { addProduct, getJson, getProducts } from "../tienda/funcionesAdmin.js";

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("formProduct");

  // Cargar el JSON inicial
  await getJson("/public/json/productos.json");
  console.log("Productos cargados:", getProducts());

  // Habilitar/deshabilitar inputs según la categoría
  document.getElementById("category").addEventListener("change", habilitarInputs);

  form.addEventListener("submit", (event) => {
    let isValid = true;

    // Validación de campos
    const title = document.getElementById("title");
    if (title.value.trim() === "") {
      isValid = false;
      title.classList.add("is-invalid");
    } else {
      title.classList.remove("is-invalid");
    }

    const marca = document.getElementById("marca");
    if (marca.value.trim() === "") {
      isValid = false;
      marca.classList.add("is-invalid");
    } else {
      marca.classList.remove("is-invalid");
    }

    const petType = document.querySelectorAll('input[name="Tipo_de_mascota"]');
    let petTypeSelected = false;
    petType.forEach((radio) => {
      if (radio.checked) {
        petTypeSelected = true;
      }
    });
    if (!petTypeSelected) {
      isValid = false;
      petType.forEach((radio) => {
        radio.classList.add("is-invalid");
      });
    } else {
      petType.forEach((radio) => {
        radio.classList.remove("is-invalid");
      });
    }

    const image = document.getElementById("image");
    if (image.value.trim() === "") {
      isValid = false;
      image.classList.add("is-invalid");
    } else {
      image.classList.remove("is-invalid");
    }

    const price = document.getElementById("price");
    if (price.value.trim() === "" || isNaN(price.value) || parseFloat(price.value) < 0) {
      isValid = false;
      price.classList.add("is-invalid");
    } else {
      price.classList.remove("is-invalid");
    }

    const description = document.getElementById("description");
    if (description.value.trim() === "") {
      isValid = false;
      description.classList.add("is-invalid");
    } else {
      description.classList.remove("is-invalid");
    }

    const category = document.getElementById("category");
    if (category.value.trim() === "") {
      isValid = false;
      category.classList.add("is-invalid");
    } else {
      category.classList.remove("is-invalid");
    }

    const size = document.getElementById("size");
    if (!size.disabled && size.value.trim() === "") {
      isValid = false;
      size.classList.add("is-invalid");
    } else {
      size.classList.remove("is-invalid");
    }

    const color = document.getElementById("color");
    if (!color.disabled && color.value.trim() === "") {
      isValid = false;
      color.classList.add("is-invalid");
    } else {
      color.classList.remove("is-invalid");
    }

    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
      return; // Detener la ejecución si el formulario no es válido
    }

    // Captura los valores del formulario
    const titleValue = title.value.trim();
    const marcaValue = marca.value.trim();
    const petTypeValue = document.querySelector('input[name="Tipo_de_mascota"]:checked')?.value || "";
    const imageValue = image.value.trim();
    const priceValue = parseFloat(price.value.trim());
    const descriptionValue = description.value.trim();
    const categoryValue = category.value.trim();
    const sizeValue = size.value.trim();
    const colorValue = color.value.trim();

    // Obtener productos actuales y calcular nuevo ID
    const Arrayproducts = getProducts();
    const newId = Arrayproducts.length > 0 ? Math.max(...Arrayproducts.map(p => p.id)) + 1 : 1;

    // Agregar el nuevo producto
    const newProduct = addProduct(
      newId,
      titleValue,
      marcaValue,
      petTypeValue,
      imageValue,
      priceValue,
      descriptionValue,
      categoryValue,
      colorValue,
      sizeValue
    );

    console.log("Nuevo producto agregado:", newProduct);
    console.log("Productos actualizados:", getProducts());

    // Guardar el JSON actualizado en localStorage
    localStorage.setItem('productos', JSON.stringify(getProducts()));

    form.classList.add('was-validated');
  });
});

/* Funcion para habilitar o desabilitar las categorias */
function habilitarInputs() {
  const seleccion = document.getElementById("category").value;
  const size = document.getElementById("size");
  const color = document.getElementById("color");

  if (seleccion === "Alimento" || seleccion === "Medicamento") {
    size.disabled = false;
    color.disabled = true;
  } else if (seleccion === "Accesorios" || seleccion === "Ropa" || seleccion === "Juguetes") {
    size.disabled = true;
    color.disabled = false;
  } else {
    size.disabled = true;
    color.disabled = true;
  }
}