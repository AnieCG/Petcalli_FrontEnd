document
  .getElementById("localRegister")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const password = document.getElementById("password").value.trim();
    
    const user = { name, lastName, email, password, telephone };

    
    localStorage.setItem("user", JSON.stringify(user));
    
    try {
      const registeredUser = await postUser(user);
      alert("Registro realizado exitosamente");
      console.log("Usuario registrado:", registeredUser);
    } catch (error) {
      alert("Error al registrar usuario");
      console.warn("Error:", error);
    }
  });

const postUser = async (newUser) => {
  const url = "http://localhost:8080/api/v1/users";

  const activity = { 
    method: "POST", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  };

  try {
    const response = await fetch(url, activity);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`);
    }

    const registeredUser = await response.json();
    console.log("Se ha registrado:", registeredUser);
    return registeredUser;

  } catch (error) {
    console.warn("Error:", error);
    throw error;
  }
};
