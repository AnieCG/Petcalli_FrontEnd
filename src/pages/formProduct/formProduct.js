document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formProduct");

  form.addEventListener("submit", (event) => {
    let isValid = true;

    // Obtenemos los valores del formulario y validar por su ID
    const title = document.getElementById("title");
    if (title.value.trim() === "") {
      isValid = false;
      title.classList.add("is-invalid");
    } else {
      title.classList.remove("is-invalid");
    }
    /* Obtener y validar la marca */
    const marca = document.getElementById("marca");
    if (marca.value.trim() === "") {
      isValid = false;
      marca.classList.add("is-invalid");
    } else {
      marca.classList.remove("is-invalid");
    }

    /* Obtener y validar el tipo de mascota */
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
    /* Obtener y validar la imagen */
    const image = document.getElementById("image");
    if (image.value.trim() === "") {
      isValid = false;
      image.classList.add("is-invalid");
    } else {
      image.classList.remove("is-invalid");
    }
    /* Obtener y validar el precio */
    const price = document.getElementById("price");
    if (price.value.trim() === '' || isNaN(price.value)) {
      isValid = false;
      price.classList.add("is-invalid");
    } else {
      price.classList.remove("is-invalid");
    }
    /* Obtener y validar la descripcion */
    const description = document.getElementById("description");
    if (description.value.trim() === '') {
      isValid = false;
      description.classList.add("is-invalid");
    } else {
      description.classList.remove("is-invalid");
    }
    /* Obtener y validar la categoria */
    const category = document.getElementById("category");
    if (category.value.trim() === '') {
      isValid = false;
      category.classList.add("is-invalid");
    } else {
      category.classList.remove("is-invalid");
    }
    /* Obtener y validar el tamaño */
    const size = document.getElementById("size");
    if (size.value.trim() === '') {
      isValid = false;
      size.classList.add("is-invalid");
    } else {
      size.classList.remove("is-invalited");
    }
    /* Obtener y Validar el color */
    const color = document.getElementById("color");
    if (color.value.trim() === '') {
      isValid = false;
      color.classList.add("is-invalid");
    } else {
      color.classList.remove("is-invalid");
    }

    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');

  });
});

/* Funcion para el cambio de categoria */
function habilitarInputs() {
  const seleccion = document.getElementById("category").value;
  const size= document.getElementById("size");
  const color= document.getElementById("color");

  if (seleccion === "Accesorios") {
    color.disabled = false;
} else {
 size.disabled = true;
}
if (seleccion === "Ropa") {
  color.disabled = false;
  size.disabled = false;
} else {
  color.disabled = true;
  size.disabled = true;
}
if (seleccion === "Alimento") {
  size.disabled = false;
 } else {
 size.disabled = true;
 }
 
if (seleccion === "Juguetes") {
 color.disabled = false;
} else {
size.disabled = true;
}
if (seleccion === "Medicamento") {
  size.disabled = false;
 } else {
 size.disabled = true;
 }
 
}


/* Funcion para enviar la informacion del Json */
