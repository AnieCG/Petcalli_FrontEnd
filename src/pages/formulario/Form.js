//función autoejecutable que se llama después de ser definida
//use strict ayuda a detectar errores y mejora el rendimiento del código
//la variable forms que busca todos los formularios que tengan la clase .needs-validation
//prototype es el modelo del cuál los arrays derivan propiedades y métodos
//slice copia todo el array al no tener argumentos
//call: método que llama a todas las funciones con un valor this explícito
//hasta el forms el slice hará una copia del forms y lo transformará en una copia superficial del array por el método prototype
//forEach para cada elemento del array o podría ser un map.
//function form es la función para cada formulario individual por eso el parámetro form
//stopPropagation: previene que el evento se propague, deteniendo la burbuja del evento
//was-validated: es una clase de bootstrap que añade los estados de validación o invalidación de acuerdo a su estado.

const checkFormValidity = (form) => {
  const inputs = form.querySelectorAll("input, select, textarea");
  let allValid = true;

  inputs.forEach((input) => {
    if (input.checkValidity()) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      allValid = false;
    }
  });

  return allValid;
};

// Añadir los event listeners para la validación en tiempo real
document
  .querySelectorAll(
    ".needs-validation input, .needs-validation select, .needs-validation textarea"
  )
  .forEach((input) => {
    input.addEventListener("input", (event) => {
      const form = event.target.closest("form");
      checkFormValidity(form);
    });
  });

// Validación al enviar el formulario
(function () {
  const forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!checkFormValidity(form) || !form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        form.classList.add("was-validated");
        setTimeout(() => {
          form.reset();
          form.classList.remove("was-validated");
          form.querySelectorAll(".is-valid, .is-invalid").forEach((input) => {
            input.classList.remove("is-valid");
            input.classList.remove("is-invalid");
          });
        }, 1000);
      }
    });
  });
})();
