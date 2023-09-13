import { comprarProducto } from "./carrito.js";

const divProds = document.getElementById("productos")

const filterPrecio = document.getElementById("filter-precio")
const filterNombre = document.getElementById("filter-nombre")
const filterColeccion =document.getElementById("filter-coleccion")
const filterTodos = document.getElementById ("todos")

 export let productosDisponibles;

document.addEventListener("DOMContentLoaded", () => {
    fetch('./db/productos.json')
        .then(response => response.json())
        .then(data => {
            productosDisponibles = data;
            generarCard(productosDisponibles);
        })
        .catch(error => console.error('Error:', error));

});


export const generarCard = (productos) => {
    divProds.innerHTML = "";

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
            <button id="comprar${id}" class="agregar-button button-card">🛒</button>
        `;

        divProds.appendChild(card)

        const btnComprar = document.getElementById(`comprar${id}`)
        btnComprar.addEventListener("click", () => comprarProducto(id))
    });
}

filterPrecio.addEventListener("click", (e) => {

    const orden = e.target.innerHTML

    let productosporPrecio = (orden === "Ascendente") 
    ? productosDisponibles.sort((a, b) => a.precio - b.precio)
    : productosDisponibles.sort((a, b) => b.precio - a.precio)
    
    generarCard(productosporPrecio)

})

filterNombre.addEventListener("click", (e) => {
    filtrarPorNombre(e.target.innerHTML.toLowerCase());
});

const filtrarPorNombre = (orden) => {
    const productosporNombre = [...productosDisponibles];

    productosporNombre.sort((a, b) => {
        return orden === "ascendente"
            ? a.nombre.localeCompare(b.nombre)
            : b.nombre.localeCompare(a.nombre);
    });

    generarCard(productosporNombre);
};

filterColeccion.addEventListener ("click" , (e) => {
    
    const Pcoleccion = e.target.innerHTML

    let productosporColeccion = productosDisponibles.filter(producto => producto.coleccion === Pcoleccion);

    generarCard(productosporColeccion);

})


filterTodos.addEventListener("click", () => {
    generarCard(productosDisponibles);
});