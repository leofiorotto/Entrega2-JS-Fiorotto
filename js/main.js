// ESTO ERA PARA LA PRIMER ENTREGA.... NO SIRVE


// const notebooks = [
//     { id: 1, name: "Lenovo", price: 80000 },
//     { id: 2, name: "Dell", price: 130000 },
//     { id: 3, name: "Asus", price: 120000 },
//     { id: 4, name: "Acer", price: 85000 },
//     { id: 5, name: "HP", price: 150000 },
//     { id: 6, name: "Apple", price: 120000 }
//   ];
  

//   const mostrarNotebooks = () => {
//     console.log("Catálogo de Notebooks:");

//     notebooks.forEach(notebook => {
//       console.log(`
//         ID: ${notebook.id}, 
//         Nombre: ${notebook.name}, 
//         Precio: $${notebook.price}
//         `);
//     });
//   };

//     const notebookPorId = id => notebooks.find(notebook => notebook.id === id);

//     const filtradoPrecio = maxPrice => notebooks.filter(notebook => notebook.price <= maxPrice);

  
//   let opcion = parseInt(prompt("Ingrese una opción:\n1. Comprar notebook por ID\n2. Ver catálogo de notebooks\n3. Buscar producto por nombre\n4. Filtrar por precio maximo\n5. Salir"));

//   while (opcion !== 5) {
//     switch (opcion) {

//       case 1:
//         let respuesta = "si";
//         let contador = 0;
//         while (respuesta === "si") {
//           const notebookId = parseInt(prompt("Ingrese el ID de la notebook que desea comprar:"));
//           const notebook = notebookPorId(notebookId);
        
//           if (notebook) {
//             alert(`Ha comprado ${notebook.name} por $${notebook.price}. ¡Gracias por su compra!`);
//             contador = contador + notebook.price;
//             respuesta = prompt("¿Quiere seguir comprando? si/no");
//           } else {
//             alert("No se encontró la notebook seleccionada.");
//           }
//         }
//         alert(`Total a pagar: $${contador}`);
//         break;
  
//       case 2:
//         mostrarNotebooks();
//         alert ("Los productos se mostraron en consola");
//         break;
  
//       case 3:
//         const nombre = prompt("Ingrese el nombre del producto que desea verificar si se encuentra");
//         const notebookEncontrada = notebooks.find(notebook => notebook.name === nombre);
//         if (notebookEncontrada) {
//             alert (`Se encontro el producto ${nombre} en el catálogo.`);
//         } else {
//           alert(`El producto ${nombre} no se encontró en el catálogo.`);
//         }
//         break;

//         case 4:
//             const maxPrice = parseFloat(prompt("Ingrese el precio máximo para el filtrado:"));
//             const notebooksFiltradas = filtradoPrecio(maxPrice);
      
//             if (notebooksFiltradas.length > 0) {
//               console.log("Notebooks filtradas por precio:");
//               notebooksFiltradas.forEach(notebook => {
//                 console.log(`
//                   ID: ${notebook.id},
//                   Nombre: ${notebook.name},
//                   Precio: $${notebook.price}
//                 `);
//             });
//             alert ("Los productos menores a ese precio se mostraron por consola");
//             } else {
//               alert(`No se encontraron notebooks dentro del rango de precio $${maxPrice}.`);
//             }
//             break;
  
//       default:
//         alert("Opción no válida. Por favor, ingrese una opción válida.");
//         break;
//     }
  
//     opcion = parseInt(prompt("Ingrese una opción:\n1. Comprar notebook por ID\n2. Ver catálogo de notebooks\n3. Buscar producto por nombre\n4. Filtrar por precio maximo\n5. Salir"));
//   }