const contadorPiezasMenos = document.getElementsByClassName("menos1");
console.log((contadorPiezasMenos));
let contadorIndividual = 0; //getElementsByClassName

contadorPiezasMenos.addEventListener("click", ()=>{ 
    contadorIndividual --;
    console.log(contadorIndividual);
    console.log("Ese era mi contador");
}
);

/* const controlarContador = ( ) =>{
    contadorIndividual --;
    contadorPiezas.textContent = contadorIndividual;
};  */