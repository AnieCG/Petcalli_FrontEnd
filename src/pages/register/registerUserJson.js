function getDataUser() {
  const name = document.getElementById("name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const telephone = document.getElementById("telephone");
  const password = document.getElementById("password");

  const user = {
    name: name,
    lastName: lastName,
    email: email,
    telephone: telephone,
    password: password,
  };
}

/* Capturar los datos del form y validarlos (ocupamos bootstrap) */
/* Si los datos son validos, convertir los datos a un objeto */
/* Y el objeto se convierte a un formato JSON */
/* Volver a investigar las validaciones con JS y Bootstrap */
/* INVESTIGAR Espresiones regulares o regex */
/* INVESTIGAR del JSON al local storage para manipularlo y utilizarlo. */

/* [
  {
    name: "Valeria",
    lastName: "Aceves",
    email: "vale.acevesschz@gmail.com",
    telephone: 5541382912,
    password: "Contraseña123#",
  },
  {
    name: "Ana",
    lastName: "Cruz",
    email: "vale.acevesschz@gmail.com",
    telephone: 5541382912,
    password: "Contraseña123#",
  },
]; */
