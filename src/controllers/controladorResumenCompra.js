import {pintarResumenCompra} from "./controladorPintarResumen.js"
//accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))



if(carrito==null){

    pintarResumenCompra("../../assets/img/nohay.webp", "Carrito vacio", true, false,null,false,null)

}
else { //el carrito esta lleno
    //recorro el carrito de compras
    carrito.forEach(function(producto){

    pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad)
   
    
})
}
