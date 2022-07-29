import {pintar} from "./controladorPintarInfoProducto.js"
console.log("hola")
console.log(  JSON.parse(localStorage.getItem("infoProducto")) )
let producto = JSON.parse(localStorage.getItem("infoProducto"))

let carrito
//revisar verificar si hay productos en el carrito
if(JSON.parse(localStorage.getItem("carrito"))==null){
    //creamos el carrito de compras
    carrito=[]
}else{
    carrito=JSON.parse(localStorage.getItem("carrito"))
}

console.log(JSON.parse(localStorage.getItem("carrito")))

pintar(producto)


//capturar la cantidad del producto seleccionado
//value del input

//agrego un nuevo atributo(cantidad) al objeto producto, 
//la que es la variable es la cantidad despues del igual
let botonAgregar = document.getElementById("agregar")

//se agrega producto al carrito
botonAgregar.addEventListener("click",function(evento){

    let alerta=document.getElementById("alerta")
    alerta.classList.remove("invisible")

    setTimeout(function(){
        alerta.classList.add("invisible")
    },3000)

    let cantidad= document.getElementById("cantidad").value
    producto.cantidad=cantidad

    //agregando un nuevo elemento a un arreglo
    //agregando un producto al carrito de compras
    carrito.push(producto)

    //almaceno el carrito en localstorage
    localStorage.setItem("carrito",JSON.stringify(carrito))

})