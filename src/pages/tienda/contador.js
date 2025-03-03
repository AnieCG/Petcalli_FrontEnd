let contadorIndividual = 0; //getElementsByClassName



setTimeout(() => {
    console.log("1 Segundo esperado")
    let contadorPiezasMenos = document.getElementsByClassName("menos1");
    //console.log((contadorPiezasMenos));

  }, 1000);



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