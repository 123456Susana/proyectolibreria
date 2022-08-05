import {pintar} from "./controladorPintarInfoProducto.js"
console.log("hola")
console.log(  JSON.parse(localStorage.getItem("infoProducto")) )
let producto = JSON.parse(localStorage.getItem("infoProducto"))

let carrito=[]
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
    //push agrega un elemento a un arreglo, en este caso carrito es un arreglo [{},{}]
    carrito.push(producto)

    //almaceno el carrito en localstorage
    localStorage.setItem("carrito",JSON.stringify(carrito))

    

    //recorriendo un arreglo
    let suma=0
    carrito.forEach(function(producto){

        suma=(suma+Number(producto.cantidad))

        localStorage.setItem("suma", suma)

        let contadorDeProductos=localStorage.getItem("suma")
        document.getElementById("suma").innerHTML=Number(contadorDeProductos)

        console.log(contadorDeProductos)
   
    })
    
 })
    
 //se llama el local storage para en contador de carrito
let contadorDeProductos=localStorage.getItem("suma")
document.getElementById("suma").innerHTML=Number(contadorDeProductos)



       

