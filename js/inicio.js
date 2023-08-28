
const divProds = document.getElementById("productos")

let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
    generarCard(productosDisponibles)
})

const generarCard = (productos) => {

    productos.forEach(producto => {

        const {imagen, nombre, precio, categoria, id} = producto

        let card = document.createElement("div")

        card.className= "producto"
        card.innerHTML = `   
            <img src="${imagen}" alt="${nombre}">
            <h2>${nombre}</h2>
            <p>${categoria}</p>
            <b>Precio: $${precio}</b><br>
            <button id="ver${id}">Ver</button>
            <button id="comprar${id}">Agregar</button>
        `;

        divProds.appendChild(card)

        const btnComprar = document.getElementById(`comprar${id}`)
        btnComprar.addEventListener("click", () => alert("Producto agregado al carrito"))
    });
}
