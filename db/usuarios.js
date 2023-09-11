export let dBusuarios = [
    {
      id: 1,
      user: "leandro",
      pass: "admin",
      admin: true,
    },
    {
        id: 2,
        user: "admin",
        pass: "admin",
        admin: true,
      },
  ];

 
JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(dBusuarios));

// function verificarCredenciales(username, password) {
//   return usuarios.some(usuario => usuario.user === username && usuario.pass === password);
// }

// const isLoggedIn = verificarCredenciales("leandro", "admin"); // Ejemplo: verifica si el usuario "leandro" está logueado con la contraseña "admin"

// if (isLoggedIn) {
//   console.log("El usuario está logueado");
// } else {
//   console.log("El usuario no está logueado");
// }