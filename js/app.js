import { productos } from './stock.js'
import { carritoIndex } from './carritoIndex.js';

const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById('producto-contenedor');

    productos.forEach(producto => {
        const div = document.createElement('div')
       /*  div.classList.add('card') */
        /* div.classList.add('card-body') */
        div.innerHTML += ` 
        <div class="card shadow">
            <img class="imagProduc" src="${producto.img}" alt="Fragancias">
            <div class="card-body">
            <h5 class="card-title text-muted"><strong><em>${producto.nombre}</em></strong></h5>
            <h6>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fa fa-star-half"></i>
            </h6>
            <p class="text-danger animate__animated animate__flash animate__infinite animate__slow	2s">
                <strong>${producto.desc}</strong></p>
            <h4>
                <small>
                    <xs class="text-decoration-line-through">$${producto.precio}</xs>
                </small>
                <p class="preciofinal fs-3">$${producto.precio1}</p>
            </h4>
            <div class="boton">
                <button class="btn2 btn-dark" id=boton${producto.id}>Comprar</button>
            </div>
            </div>
            </div>
        </div>
      `
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`)
        boton.addEventListener('click', () => {
            carritoIndex(producto.id)
            alert(`Se agrego ${producto.nombre}`)

        })

    })

}


mostrarProductos(productos)

