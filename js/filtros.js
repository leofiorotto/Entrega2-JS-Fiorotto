document.addEventListener("DOMContentLoaded", function() {
    const productoDropdown = document.getElementById("productoDropdown");
    const precioDropdown = document.getElementById("precioDropdown");
    const nombreDropdown = document.getElementById("nombreDropdown");

    productoDropdown.addEventListener("click", function() {
        // Aquí puedes agregar la lógica para filtrar por producto
        const filtro = this.getAttribute("data-filter");
        console.log(`Filtrar por: ${filtro}`);
    });

    precioDropdown.addEventListener("click", function() {
        // Aquí puedes agregar la lógica para filtrar por precio
        const filtro = this.getAttribute("data-sort");
        console.log(`Ordenar por precio de forma ${filtro}`);
    });

    nombreDropdown.addEventListener("click", function() {
        // Aquí puedes agregar la lógica para filtrar por nombre
        const filtro = this.getAttribute("data-sort");
        console.log(`Ordenar por nombre de forma ${filtro}`);
    });
});
