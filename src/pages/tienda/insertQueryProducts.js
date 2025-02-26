import createCards from "./createCards.js";

export default function insertQueryProducts( productos, seccionCards ) {
        const queryString = localStorage.getItem("searchQuery");
        if (queryString) {
                const productsToShow = productos.filter((product) =>
                    product.petType.toLowerCase().includes(queryString)  ||
                    product.description.toLowerCase().includes(queryString) ||
                    product.title.toLowerCase().includes(queryString) ||
                    product.category.toLowerCase().includes(queryString) 
                    );
            return (seccionCards.innerHTML = productsToShow.map((card) => createCards(card)).join(""));
        }
 }