import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

let email=document.getElementById("email")
let password=document.getElementById("password")
let boton=document.getElementById("ingresar")


boton.addEventListener("click", function(evento){

    //se pone el evento preventDefault para que la pagina no se refresque
    evento.preventDefault()
    email=email.value
    password=password.value
    //console.log(email,password)
    
    //enviando datos hacia google
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert("bienvenido")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert("upss"+errorMessage)
    });
    

})