import { productosBD } from "../helpers/baseDatos.js"
import { pintarProductos } from "./controladorPintar.js"
export function buscarProductos(){
    //controlador el input donde escribe en usuario
    let buscador=document.getElementById("busqueda")

    //Detecto que el usuario escribe y capturamos lo que esta escribiendo
    buscador.addEventListener("keyup", function(evento){
        let productoBuscado=evento.target.value

        let filtro=productosBD.filter(function(producto){
            //toLowerCase() lo que hace es pasar todas las palabras a minuscula, includes es la busqueda y se pone a la final toLowerCase para busqueda en minuscula
            return (producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()))
        })
        console.log(filtro)
        pintarProductos(filtro)

    })
}