import { productosDisponibles } from "./inicio.js"

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito",JSON.stringify([]))



document.addEventListener("DOMContentLoaded", ()  => {
    mostrarCarrito();
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
const listaCarrito = document.getElementById("items")
const totalCarrito = document.getElementById("totales")
const botonCarrito = document.getElementById ("btnCarrito")

const divCarrito = document.getElementById("carrito")


botonCarrito.addEventListener ("click", () => {
       mostrarCarrito();
       divCarrito.style.display === "block" ? divCarrito.style.display = "none" : divCarrito.style.display = "block";
})

export const comprarProducto = (idProducto) => {

    const producto = productosDisponibles.find((producto) => producto.id === idProducto)

    const {imagen, nombre, categoria, precio, id} = producto

    const productoCarrito = carrito.find ((producto) => producto.id === idProducto)

    if (productoCarrito === undefined) {
        const nuevoProdCarrito = {
            id: id,
            nombre: nombre,
            categoria: categoria,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        }

        carrito.push(nuevoProdCarrito)
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }else {
        productoCarrito.cantidad++;
        productoCarrito.precio = productoCarrito.cantidad * precio;
    
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"))


    Swal.fire({
        title: 'Agregado al carrito',
        text: `Agregaste el ${categoria} ${nombre}`,
        imageUrl: `${imagen}`,
        imageAlt: 'Custom image',
      })
}
const mostrarCarrito = () => {

    listaCarrito.innerHTML = ''
    carrito.forEach(producto => {
    const { imagen, nombre, cantidad, precio, id } = producto
    let body = document.createElement("tr")

    body.className = "producto__carrito"

    body.innerHTML = `
    <div class="carrito-container">
        <img src="${imagen}" alt="${nombre}" class="carrito-imagen">
        <div class="carrito-info">
            <h3>${nombre}</h3>
            <p>Unidades: ${cantidad}</p>
            <p>Costo Unitario: $${(precio / cantidad).toFixed(2)}</p>
            <p>Costo Total: $${precio.toFixed(2)}</p>
            <button id="+${id}" class="button btn-success">+</button>
            <button id="-${id}" class="button btn-danger">-</button>
        </div>
    </div>
`;

    listaCarrito.append(body)
    
    const btnAgregar = document.getElementById(`+${id}`)
    const btnRestar = document.getElementById(`-${id}`)

    btnAgregar.addEventListener("click", () => aumentarCantidad(id))
    btnRestar.addEventListener("click", () => restarCantidad(id))
    
});

mostrarTotal()
}

const mostrarTotal = () => {

    if(carrito.length > 0){
        totalCarrito.innerHTML = ""

        let total = document.createElement("tr")

        total.innerHTML = `
                <br><br>
                <b>Cantidad Total: ${generarTotales().cantidadTotal}</b><br>
                <b>Costo Total: ${generarTotales().costoTotal.toFixed(2)}ETH</b><br><br>
                <button class="button btn-success">Comprar</button>
            `;
        totalCarrito.append(total)
    }else{
        totalCarrito.innerHTML = "<h3>No hay producto en carrito</h3>"
    }

}


const generarTotales = () => {
    const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0)
    const cantidadTotal = carrito.reduce((total, {cantidad}) => total + cantidad, 0)

    return {
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal
    }
}


const aumentarCantidad = (id) => {
    const i = carrito.findIndex((producto) => producto.id === id)
    const precioAct = carrito[i].precio / carrito[i].cantidad

    carrito[i].cantidad++
    carrito[i].precio = precioAct*carrito[i].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito()

    Toastify({
        text: `Unidad agregada`,
        duration: 1000,
        style: {
            background: "green",
          }
      }).showToast();

}

const restarCantidad = (id) => {
    const i = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[i].precio / carrito[i].cantidad

    if (carrito[i].cantidad > 1){
        carrito[i].cantidad--
        carrito[i].precio = precio*carrito[i].cantidad
    }else {
        carrito.splice(i, 1)
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito()

    Toastify({
        text: `Unidad eliminada`,
        duration: 1000,
        style: {
            background: "red",          
        }
      }).showToast();

}

