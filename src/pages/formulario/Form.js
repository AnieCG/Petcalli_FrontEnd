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

(function () {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
