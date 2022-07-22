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

//pintamos la foto desde el objeto del local storage

let foto= document.getElementById("foto")
foto.src=producto.foto

let titulo=document.getElementById("titulo")
titulo.textContent=producto.nombre

let valor=document.getElementById("valor")
valor.textContent=producto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=producto.descripcion

//capturar la cantidad del producto seleccionado
//value del input

//agrego un nuevo atributo(cantidad) al objeto producto, 
//la que es la variable es la cantidad despues del igual
let botonAgregar = document.getElementById("agregar")


botonAgregar.addEventListener("click",function(evento){
    let cantidad= document.getElementById("cantidad").value
    producto.cantidad=cantidad

    //agregando un nuevo elemento a un arreglo
    //agregando un producto al carrito de compras
    carrito.push(producto)

    //almaceno el carrito en localstorage
    localStorage.setItem("carrito",JSON.stringify(carrito))

})