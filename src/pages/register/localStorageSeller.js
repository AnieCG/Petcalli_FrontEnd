document
  .getElementById("localRegister")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("emailDueño").value.trim();
    const telephone = document.getElementById("telefonoDueño").value.trim();
    const nameStore = document.getElementById("nombreTienda").value.trim();
    const description = document.getElementById("descripcionTienda").value.trim();
    const address = document.getElementById("address").value.trim();
    const zip = document.getElementById("Zip").value.trim();
    const city = document.getElementById("City").value.trim();
    const state = document.getElementById("State").value.trim();

    const password = document.getElementById("password").value.trim();
    const user = {
      name,
      lastName,
      email,
      password,
      telephone,
      nameStore,
      description,
      zip,
      address,
      state,
      city,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("registro realizado");
  });
