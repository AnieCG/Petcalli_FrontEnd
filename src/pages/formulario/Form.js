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

const checkFormValidity = () => {
  const name = document.querySelector("#validationCustom01");
  const telephone = document.querySelector("#validationCustom03");
  const submitButton = document.querySelector(".button");

  const isNameValid =
    name.value.trim() !== "" &&
    name.value.length >= 5 &&
    name.value.length <= 31;

  const isTelephoneValid =
    telephone.value.trim() !== "" &&
    /^\d+$/.test(telephone.value) &&
    telephone.value.length >= 10;

  submitButton = !(isNameValid && isTelephoneValid);
};

document
  .querySelector("#validationCustom01")
  .addEventListener("input", checkFormValidity);
document
  .querySelector("#validationCustom03")
  .addEventListener("input", checkFormValidity);

document.addEventListener("DOMContentLoaded", checkFormValidity);

(function () {
  const forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("input", checkFormValidity);
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          form.classList.add("was-validated");
          setTimeout(() => {
            form.reset();
            form.classList.remove("was-validated");
          }, 1000);
        }
      },
      false
    );
  });

  document.addEventListener("DOMContentLoaded", () => {
    forms.forEach((form) => checkFormValidity.call(form));
  });
})();
