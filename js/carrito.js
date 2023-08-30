import { productosDisponibles } from "./inicio.js"

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito",JSON.stringify([]))

let carrito = JSON.parse(sessionStorage.getItem("carrito"))

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
    console.log(carrito);
}