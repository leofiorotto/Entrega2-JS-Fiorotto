// Variables
const notebooks = [
    { id: 1, name: "Lenovo", price: 80000 },
    { id: 2, name: "Dell", price: 130000 },
    { id: 3, name: "Asus", price: 120000 },
    { id: 4, name: "Acer", price: 85000 },
    { id: 5, name: "HP", price: 150000 },
    { id: 6, name: "Apple", price: 120000 }
  ];
  

  const mostrarNotebooks = () => {
    console.log("Catálogo de Notebooks:");

    notebooks.forEach(notebook => {
      console.log(`
        ID: ${notebook.id}, 
        Nombre: ${notebook.name}, 
        Precio: $${notebook.price}
        `);
    });
  };    
  
  let opcion = parseInt(prompt("Ingrese una opción:\n1. Comprar notebook por ID\n2. Ver catálogo de notebooks\n3. Buscar producto por nombre\n4. Salir"));

  while (opcion !== 4) {
    switch (opcion) {
      case 1:
        const selectedNotebookId = parseInt(prompt("Ingrese el ID de la notebook que desea comprar:"));
        const selectedNotebook = buscarNotebookPorId(selectedNotebookId);
  
        if (selectedNotebook) {
          alert(`Ha comprado ${selectedNotebook.name} por $${selectedNotebook.price}. ¡Gracias por su compra!`);
        } else {
          alert("No se encontró la notebook seleccionada.");
        }
        break;
  
      case 2:
        mostrarNotebooks();
        break;
  
      case 3:
        const nombre = prompt("Ingrese el nombre del producto que desea verificar si se encuentra");
        const notebookEncontrada = notebooks.find(notebook => notebook.name.toLowerCase() === nombre);
  
        if (notebookEncontrada) {
            alert (`Se encontro el producto ${nombre} en el catálogo.`);
        } else {
          alert(`El producto ${nombre} no se encontró en el catálogo.`);
        }
        break;
  
      default:
        alert("Opción no válida. Por favor, ingrese una opción válida.");
        break;
    }
  
    opcion = parseInt(prompt("Ingrese una opción:\n1. Comprar notebook por ID\n2. Ver catálogo de notebooks\n3. Buscar producto por nombre\n4. Salir"));
  }
  
  console.log("Gracias por utilizar el simulador.");