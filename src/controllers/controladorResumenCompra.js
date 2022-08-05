import {pintarResumenCompra} from "./controladorPintarResumen.js"
//accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))



if(carrito==null){
    pintarResumenCompra("../../assets/img/nohay.webp", "Carrito vacio", true, false,null,false,null)
}
else { //el carrito esta lleno
    //recorro el carrito de compras
    carrito.forEach(function(producto){
    pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad,true,producto.subtotal)   
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

    pintarResumenCompra("../../assets/img/nohay.webp", "Carrito vacio", true, false,null,false,null)

})

//se llama el local storage para en contador de carrito
let contadorDeProductos=localStorage.getItem("suma")
document.getElementById("suma").innerHTML=Number(contadorDeProductos)
