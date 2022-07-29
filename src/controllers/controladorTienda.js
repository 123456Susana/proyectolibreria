//se utiliza LLAVES con el import para encajonar lo que viene
//se traen los datos de los productos(consultar la bd)
import { productosBD } from "../helpers/baseDatos.js"

//llamamos al metodo encargado de aplicar traversing y pintar la tienda
import { pintarProductos } from "./controladorPintar.js"
//se llama la funcion
pintarProductos(productosBD)

//llamamos al metodo encargado de buscar productos por texto coincidente
import { buscarProductos } from "./controladorBuscar.js"
buscarProductos()

//escuchamos clic en el contenedor padre de la tienda
import { ampliarInfoProducto } from "./controladorAmpliarInfo.js"
let contenedor=document.getElementById("fila")
contenedor.addEventListener("click", function(evento){
    let producto=ampliarInfoProducto(evento)
    console.log(producto)

    //ALMACENAR EN EL localStorage LA INFORMACION DEL PRODUCTO SELECCIONADO
    //se pone JSON.stringify  para que en la consola no aparezca
    //object, si no que nos muestre toda la info del objeto
    localStorage.setItem("infoProducto",JSON.stringify(producto))
    console.log(localStorage.getItem("infoProducto"))

    //abro nueva ventana
    window.location.href="./ampliarInfo.html"
})
