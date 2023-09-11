const btnRegister = document.getElementById("btn-register")
const btnLogin = document.getElementById("btn-login")
const formRegister = document.getElementById("user-register")
const formLogin = document.getElementById("user-login")
const registerLogin = document.getElementById ("register-login")
let usuarios = JSON.parse(localStorage.getItem("usuarios"))


registerLogin.addEventListener ("click", () => {
    setTimeout(() => {
        formLogin.style.display = "none"; 
        formRegister.style.display = "block";

    }, 200);
} )



btnRegister.addEventListener("click", function(event) {
    event.preventDefault(); 

    const newUser = document.getElementById("new-user").value;
    const newPassword = document.getElementById("new-password").value;

   
    usuarios.push({ user: newUser, pass: newPassword, admin: false });


    localStorage.setItem("usuarios", JSON.stringify(usuarios));


    document.getElementById("new-user").value = "";
    document.getElementById("new-password").value = "";

    Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
      }) .then(() => {
        window.location.href = './login.html';
    }); 
});

btnLogin.addEventListener("click", function(event) {
    event.preventDefault();


    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const user = usuarios.find(u => u.user === username && u.pass === password);

    if (user) {
        Swal.fire({
            icon: 'success',
            title: 'Logueado correctamente',
          }) .then(() => {
            window.location.href = '../index.html';
        });   
        } else {
        Swal.fire({
            icon: 'error',
            title: 'Usuario o contraseña incorrectos',
            text: `Vuelva a intentarlo`,
          })
    }
});
