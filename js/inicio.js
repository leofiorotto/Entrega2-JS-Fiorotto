import { comprarProducto } from "./carrito.js";


const divProds = document.getElementById("productos")

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
    generarCard(productosDisponibles)
})

export const generarCard = (productos) => {

    productos.forEach(producto => {

        const {imagen, nombre, precio, categoria, coleccion,  id} = producto

        let card = document.createElement("div")

        card.className= "producto"
        card.innerHTML = `   
            <img src="${imagen}" alt="${nombre}">
            <h2>${nombre}</h2>
            <p>${coleccion}</p>
            <p>${categoria}</p>
            <b>Precio: ${precio} ETH</b><br>
            <button id="ver${id}">Ver</button>
            <button id="comprar${id}">Agregar</button>
        `;

        divProds.appendChild(card)

        const btnComprar = document.getElementById(`comprar${id}`)
        btnComprar.addEventListener("click", () => comprarProducto(id))
    });
}