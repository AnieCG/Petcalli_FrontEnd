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
        } else {
          event.preventDefault(); // Previene el envío predeterminado
          fetch(form.action, {
            //es el post del form-submit quiero realizar una solicitud
            method: "POST", //Es el mètodo con el cuàl voy a enviar los datos del form
            body: new FormData(form),
          }).then(() => {
            //Si se resuelve el formulario se resetea, se remueven los validadores y aparece el alert
            form.reset(); // Restablece el formulario después del envío exitoso
            form.classList.remove("was-validated"); // Remueve la clase de validación
            alert("El formulario se envió correctamente!"); //Se lo puse porque ya no redirige a otra pàgina lo hace enseguida
          });
        }
        form.classList.add("was-validated"); //Se le añaden las validaciones a acada uno
      },
      false
    );
  });
})();

// JavaScript para mostrar/ocultar la contraseña
const togglePassword = document.querySelector("#togglePassword"); //es del boton este id
const password = document.querySelector("#password"); //es el del input

togglePassword.addEventListener("click", () => {
  //cuando le doy click al boton de toggle voy a cambiar entre el input del password y el texto del input
  // Alterna entre ver y no ver la contraseña
  const type =
    //se obtiene el atributo type del input
    //si type es = password ? text y al revès
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
});
