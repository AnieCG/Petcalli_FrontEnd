const header = document.getElementById("footer");

const insertFooter = () => {
    const footer = document.getElementById("footer");
    footer.innerHTML = `


    <footer class="bd-footer py-4 py-md-5 mt-5 ">
    <section>
        <div class="row">
            <div class="col-1">
                <!-- <p>Petcalli</p> -->
            </div>
            <div class="col">
                <p>Petcalli</p>
                <p style="font-size:.7vw;">"Porque en el corazón de nuestra tienda está el compromiso 
                    de cuidar a tu mascota tanto como tú lo haces”</p>
            </div>
            <div class="col">
                <p>Compañia</p>
                <a href="">Sobre Nosotros</a>
                <a href="">Reseñas</a>
                <a href="">Categorias</a>
            </div>
            <div class="col">
                <p>Links</p>
                <a href="#">Productos Premium</a>
                <a href="#">Productos más vendidos</a>
                <a href="#">Servicios</a>
            </div>
            <div class="col">
                <p>Servicio al cliente</p>
                <a href="">Contactanos</a>
                <a href="">Compras</a>
                <a href="">Devoluciones</a>
            </div>
            <div class="col">
                <p><strong>Tienda</strong></p>
                <a href="#">Categoria por mascotas</a>
                <br>
                <a href="#">Más populares</a>
            </div>
            <div class="col-1">
                <!-- <p>Petcalli</p> -->
            </div>
        </div>
    </section>
    
    </footer>
    `;
}

insertFooter();