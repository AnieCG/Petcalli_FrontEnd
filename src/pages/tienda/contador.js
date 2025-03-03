let contadorIndividual = 1; //getElementsByClassName



setTimeout(() => {
    console.log("1/2 Segundo esperado")
    let total = document.getElementsByClassName("ventanasModales");
    let contadorPiezasMenos = document.getElementsByClassName("menos");
    let contadorPiezasMas = document.getElementsByClassName("mas");
    let contador = document.getElementsByClassName("contador");
    let cerrar = document.getElementsByClassName("btn-close");
    let cerrar2 = document.getElementsByClassName("cerrar");
    console.log((total.length));
    //console.log((contador));

    
    for(let i = 0; i<contador.length; i++){
        contadorPiezasMenos[i].addEventListener("click", ()=>{ 
            if (contadorIndividual>=1){
                contadorIndividual --;
                //console.log(contadorIndividual);
                //console.log("Ese era mi contador" + i );
                contador[i].innerHTML = `<h2 class="mt-2 m-1"><strong> ${contadorIndividual} </strong></h2>`;
            }

        }
        );
    
        contadorPiezasMas[i].addEventListener("click", ()=>{ 
            contadorIndividual ++;
            //console.log(contadorIndividual);
            //console.log("Ese era mi contador" + i);
            contador[i].innerHTML = `<h2 class="mt-2 m-1"><strong> ${contadorIndividual} </strong></h2>`;
        }
        );

        cerrar[i].addEventListener("click", ()=>{ 
            contadorIndividual = 1;
            //console.log(contadorIndividual);
            contador[i].innerHTML = `<h2 class="mt-2 m-1"><strong> ${contadorIndividual} </strong></h2>`;
        }
        );
        cerrar2[i].addEventListener("click", ()=>{ 
            contadorIndividual = 1;
            //console.log(contadorIndividual);
            contador[i].innerHTML = `<h2 class="mt-2 m-1"><strong> ${contadorIndividual} </strong></h2>`;
        }
        );
    }



    
  








}, 500);





/* const controlarContador = ( ) =>{
    contadorIndividual --;
    contadorPiezas.textContent = contadorIndividual;
};  */