/* Esta funcion  primero espera a que cargue el DOM 
despues guarda la busqueda en localStorage y redirecciona
a la pagina de tienda
*/
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function () {
        let queryString = document.getElementById("searchInput").value.trim().toLowerCase();
        if (queryString) {
            localStorage.setItem("searchQuery", queryString); 
            window.location.href = "\src\pages\tienda\tienda.html";
        }
    }); 
});
