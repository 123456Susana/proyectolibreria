import {pintarResumenCompra} from "./controladorPintarResumen.js"
//accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))

let acumuladorValorTotal=0


if(carrito==null){
    let cambioDivisa=document.getElementById("divisa") 
    cambioDivisa.innerHTML=""
    cambioDivisa.classList.add("invisible", "d-none")
    pintarResumenCompra("../../assets/img/nohay.webp", "Carrito vacio", true, false,null,false,null,false,null)
}
else { //el carrito esta lleno
    //recorro el carrito de compras

    carrito.forEach(function(producto){
        producto.subtotal=Number(producto.precio.split("$")[1])*Number(producto.cantidad)
        acumuladorValorTotal=acumuladorValorTotal+producto.subtotal
    pintarResumenCompra(producto.foto,producto.nombre,false,true,Number(producto.precio.split("$")[1]),true,Number(producto.cantidad),true,producto.subtotal)   
})

console.log(acumuladorValorTotal)

let contenedorTotal=document.getElementById('total')
let fila=document.createElement('div')
fila.classList.add('row', 'my-4')
let columna= document.createElement('div')
columna.classList.add('col-12', 'col-md-11', 'text-center','border-end')
let titulo= document.createElement('h3')
titulo.classList.add('text-center')
titulo.textContent="TOTAL DE LA COMPRA"
let valorTotal=document.createElement('h2')
valorTotal.classList.add('text-center', 'border-end')
valorTotal.textContent='COP $ '+ Number(acumuladorValorTotal)

//JERARQUIA
columna.appendChild(titulo)
columna.appendChild(valorTotal)
fila.appendChild(columna)
contenedorTotal.appendChild(fila)

let cambioDivisa=document.getElementById("divisa")
cambioDivisa.addEventListener("click", function(evento){
   valorTotal.textContent = "USD $ "+Math.round(acumuladorValorTotal/4204)
})

cambioDivisa.addEventListener("dblclick",function(evento){
    valorTotal.textContent = "COP $"+ acumuladorValorTotal
})
}

//RUTINA PARA LIMPIAR EL RESUMEN DE LA COMPRA
let limpiar=document.getElementById("limpiar")
limpiar.addEventListener("click", function(evento){
    localStorage.removeItem("carrito")
    localStorage.removeItem("suma")

    let compra=document.getElementById("suma")
    compra.innerHTML=""

    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML="" 

    let contenedorTotal=document.getElementById('total')
    contenedorTotal.innerHTML=""

    let cambioDivisa=document.getElementById("divisa") 
    cambioDivisa.innerHTML=""
    cambioDivisa.classList.add("invisible", "d-none")

    pintarResumenCompra("../../assets/img/nohay.webp", "Carrito vacio", true, false,null,false,null,false,null)

})


//se llama el local storage para en contador de carrito
let contadorDeProductos=localStorage.getItem("suma")
document.getElementById("suma").innerHTML=Number(contadorDeProductos)
