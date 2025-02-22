document.getElementById("localRegister").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const password = document.getElementById("password").value.trim();
    

    const user = {
        name,
        lastName,
        email, 
        password,
        telephone
    };
    console.log("sí se está ejecutando;", user);

    localStorage.setItem("user", JSON.stringify(user));
    alert("registro realizado");

});

