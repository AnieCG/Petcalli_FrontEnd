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
document.getElementById("form").addEventListener("submit", function {
  e.preventDefault(); // Previene el envío del formulario para poder validarlo con JS
      
      const nombre = document.getElementById('exampleInputName').value.trim();
      const correo = document.getElementById('exampleInputEmail').value.trime();
      const telefono = document.getElementById('exampleInputTel').value.trime();
      const mensaje = document.getElementById('exampleInputMessage').value.trime();
      const mensajeError = document.getElementById('mensajeError');

      // Validación de informacion que se proporcione
      if (nombre === '' || correo ==`` || telefono == `` || mensaje ==`` ){
          mensajeError.innerText = 'El campo no puede estar vacío.';
          return;
      };
      if (!/^\d+$/.test(telefono)) {
        mensajeError.innerText = 'El campo teléfono solo puede contener números.';
        return;
      };
      const templateParams = {
        nombre: exampleInputName,
        correo: exampleInputEmail,
        telefono: exampleInputTel,
        mensaje: exampleInputMessage
        
    };
    emailjs.send('TU_ID_DE_SERVICIO', 'TU_ID_DE_PLANTILLA', templateParams)
        .then(function(response) {
           console.log('Correo enviado', response.status, response.text);
           alert('Los datos fueron enviados correctamente.');
        }, 
        function(error) {
           console.log('Fallo en el envío', error);
           alert('Hubo un problema al enviar los datos.');
        });
});