const header = document.getElementById("footer");

const insertFooter = () => {
    const footer = document.getElementById("footer");
    footer.innerHTML = `


        <section>
        <div class="row">
            <div class="col-1">
                <!-- <p>Petcalli</p> -->
            </div>
            <div class="col">
                <img src="/public-images/Logo-shape.svg" alt="logo petcalli">
                <p style="font-size:12px">"Porque en el corazón de nuestra tienda está el compromiso 
                    de cuidar a tu mascota tanto como tú lo haces”</p>
            </div>
            <div class="col d-none d-sm-block">
                <p><strong>Compañia</strong></p>
                <a href="#">Sobre Nosotros</a> <br>
                <a href="#">Reseñas</a> <br>
                <a href="#">Categorias</a> 
            </div>
            <div class="col d-none d-sm-block">
                <p><strong>Links</strong></p>
                <a href="#">Productos Premium</a> <br>
                <a href="#">Productos más vendidos</a> <br>
                <a href="#">Servicios</a>
            </div>
            <div class="col d-none d-sm-block">
                <p><strong>Servicio al cliente</strong></p>
                <a href="#">Contactanos</a><br>
                <a href="#">Compras</a> <br>
                <a href="#">Devoluciones</a>
            </div>
            <div class="col d-none d-sm-block">
                <p><strong>Tienda</strong></p>
                <a href="#">Categoria por mascotas</a>
                <br>
                <a href="#">Más populares</a>
            </div>
            <div class="col-1">
                
            </div>
        </div>
    </section>
    
    `;
}

insertFooter();