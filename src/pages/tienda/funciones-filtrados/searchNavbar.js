/* Esta funcion  primero espera a que cargue el DOM 
despues guarda la busqueda en localStorage y redirecciona
a la pagina de tienda
*/
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function (event) {
        event.preventDefault();
        let queryString = document.getElementById("searchInput").value.trim().toLowerCase();
        console.log("Prueba 1"+ `esta es la consulta ${queryString}`);
        if (queryString) {
            localStorage.setItem("searchQuery", queryString); 
            if(window.location.href !== "/src/pages/tienda/tienda.html" ){
                window.location.href = "/src/pages/tienda/tienda.html";
            }
        }
    }); 
});