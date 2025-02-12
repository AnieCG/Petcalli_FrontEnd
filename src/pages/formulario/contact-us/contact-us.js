//document.addEventListener("", funtion (){ 
//const nombre = document.getElementById("nombre");
//const correo = document.getElementById("exampleInputEmail");
//const telefono = document.getElementById("exampleInputTel");
//const mensaje = document.getElementById("exampleInputMessage");
//const form = document.getElementById("form");
//const warning = document.getElementById("warning");

//form.addEventListener("submit", e=> {
   // e.preventDefault()
 //   let warning = "";
   // if(exampleInputName.value.length < 6){
     // warning+=`El nombre no es valido <br>`    
//}
//})
document.addEventListener("click", function () {
  const form = document.getElementById('form');
  const mensajeError = document.getElementById('mensajeError');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Previene el envío del formulario para poder validarlo con Javascript

      const nombre = document.getElementById('exampleInputName').value;
      const correo = document.getElementById('exampleInputEmail').value;
      const telefono = document.getElementById('exampleInputTel').value;
      const mensaje = document.getElementById('exampleInputMessage').value;

      // Validación de informacion que se proporcione
      if (nombre.trim() === '') {
          mensajeError.innerText = 'El campo nombre no puede estar vacío.';
          return;
      }

      if (correo.trim() === '') {
          mensajeError.innerText = 'El campo email no puede estar vacío.';
          return;
      }
      if (telefono.trim() === '') {
        mensajeError.innerText= 'El campo telefono no puede estar vacío.';
        return;
    }

      if (!validarEmail(email)) {
          mensajeError.innerText = 'El formato del correo no es válido.';
          return;
      }

      if (mensaje === '') {
          mensajeError.innerText = 'Debes escribir un mensaje.';
          return;
      }

      // Si todo está correcto, se puede proceder a enviar el formulario o hacer alguna otra acción
      mensajeError.innerText = '';
      // alert('Formulario enviado con éxito!');
      formulario.submit(); // Descomentar esta línea para permitir el envío del formulario
  });

  function validarEmail(exampleInputEmail) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(exampleInputEmail).toLowerCase());
  }
});  

