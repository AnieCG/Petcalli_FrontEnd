import mostrarProductos from "/src/pages/tienda/funciones-filtrados/mostrarProductos.js";

const $seccionCards = document.getElementById("seccion-cards");
const counterProductsToShow = document.getElementById("counterProductsToShow");

export default function insertQueryProducts( productos ) {
        
        const queryString = localStorage.getItem("searchQuery");
        if (queryString) {
                const productsToShow = productos.filter((product) =>
                    product.petType.toLowerCase().includes(queryString)  ||
                    product.description.toLowerCase().includes(queryString) ||
                    product.title.toLowerCase().includes(queryString) ||
                    product.category.toLowerCase().includes(queryString) 
                    );
                    if(productsToShow){
                        mostrarProductos(productsToShow);
                        counterProductsToShow.innerHTML = productsToShow.length;
                    }else{
                        $seccionCards.innerText=`No hay resultados para: ${queryString}`;
                    }
                    localStorage.removeItem("searchQuery");
        }else{
                mostrarProductos(productos);
        }
 };
