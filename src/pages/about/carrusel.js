const contenedor = document.getElementById("carousel");

const insertCarousel = () => {
  const carousel = document.getElementById("carousel");
  carousel.innerHTML = `

     <div class="container mt-5">
        <div id="multiCardCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" 
        data-bs-interval="3000">
            <div class="carousel-inner">
                <h1><em>COLABORADORES</em></h1>
                <!-- primeras imágenes -->

                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/andy.png" class="card-img-top" alt="foto de Andrea">
                                <div class="card-body">
                                    <p class="card-text"><strong>Andrea Eunice López Cárdenas.</strong>
                                        
                                       <span><a href=" https://github.com/AndreaEunice">
                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo github">
                                        </a>
                                        <a href="https://www.linkedin.com/in/andreaeunice-l%C3%B3pez/">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo linkedin">
                                        </a> </span>
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/jose.png" class="card-img-top" alt="foto de Jose">
                                <div class="card-body">
                                    <p class="card-text"><strong>José Crescenciano Meza Ortega.</strong>
                                        <span><a href="https://github.com/Jcdelega ">
                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo github">
                                        </a>
                                        <a href="http://www.linkedin.com/in/jose-crescenciano-m-1538bb264">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo linkedin">
                                        </a> </span>
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/kati.png" class="card-img-top" alt="foto de kati">
                                <div class="card-body">
                                    <p class="card-text"><strong>Katia Lorena Cerón Sandoval.</strong>
                                       <span><a href="https://github.com/kalocesa ">

                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo github">
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/kalocesa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo linkedin">
                                        </a> </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/alan.png" class="card-img-top" alt="foto de Alan">
                                <div class="card-body">
                                    <p class="card-text"><strong> Cristian Alan Padrón Flores.</strong>
                                       <span><a href="https://github.com/arancitof">

                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo github"> 
                                        </a>
                                        <a href="https://www.linkedin.com/in/alan-padron/"> 
                                        <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo linkedin">
                                        </a> </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- segunda tanda -->
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/vale.png" class="card-img-top" alt="foto de Valeria">
                                <div class="card-body">
                                    <p class="card-text"><strong>Valeria Haciel Aceves Sánchez.</strong>
                                       <span> <a href="https://github.com/Haciela">
                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo github">
                                        </a>
                                        <a href="www.linkedin.com/in/valeria-aceves15">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo linkedin">
                                        </a> </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/samuel.png" class="card-img-top" alt="foto de samuel">
                                <div class="card-body">

                                    <p class="card-text"><strong>Samuel Aguirre Morales.</strong>
                                        <span><a href="https://github.com/Samuelmoragr ">
                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo github">
                                        </a>
                                        <a href="https://www.linkedin.com/in/samuel-aguirre-morales-3647b3342/">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo linkedin">
                                        </a> </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/ana.png" class="card-img-top" alt="foto de Ana">
                                <div class="card-body">
                                    <p class="card-text"><strong>Ana Lilia Cruz Guzmán.</strong>
                                      <span> <a href="https://github.com/AnieCG">
                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo de github">
                                        </a>
                                        <a href="http://linkedin.com/in/qfbanacruz ">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo de linkedin">
                                        </a> </span>
                                        </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/fernando.png" class="card-img-top" alt="foto de Fernando">
                                <div class="card-body">
                                    <p class="card-text"><strong>Fernando Alexis Hernández Hernández</strong>
                                       <span>  <a href="https://github.com/FernandoAlexisHH">
                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo de github">
                                        </a>
                                        <a href="https://www.linkedin.com/in/fernando-alexis-hernandez/">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo de linkedin">
                                        </a> </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- terceras -->
                <div class="carousel-item">
                    <div class="row last-slide d-flex justify-content-center">
                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/erika.png" class="card-img-top" alt="foto de Erika">
                                <div class="card-body">
                                    <p class="card-text"><strong>Erika Gonzalez Vázquez</strong>
                                       <span> <a href="https://github.com/ErikaGove ">
                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo de github">
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/erika-gonz%C3%A1lez-v%C3%A1zquez-745a6a240/ ">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo linkedin">
                                        </a> </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img id="Aurelia" src="imagenes/imagenes/aure.png" class="card-img-top"
                                    alt="Fotografía de Aurelia">
                                <div class="card-body">
                                    <p class="card-text"> <strong>Aurelia Robles Pérez.</strong>
                                        <span><a href="https://github.com/Aure25robles">
                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo de github">
                                        </a>
                                        <a href="www.linkedin.com/in/aurelia-robles-perez">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo de linkedin">
                                        </a> </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="card">
                                <img src="imagenes/imagenes/frida.png" class="card-img-top" alt="foto de Frida">
                                <div class="card-body">
                                    <p class="card-text"><strong>Frida Osorno González.</strong>
                                       <span> <a href="https://github.com/fridaosorno ">
                                            <img id="iconos" src="imagenes/imagenes/github.png" alt="logo de github">
                                        </a>
                                        <a href="https://www.linkedin.com/in/frida-osorno-gonz%C3%A1lez-a31b05167/ ">
                                            <img id="iconos" src="imagenes/imagenes/linkedin.png" alt="logo de linkedin">
                                        </a> </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    </div> 
    `;
};

insertCarousel();
