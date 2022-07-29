export function pintar (producto){
    //pintamos la foto desde el objeto del local storage

let foto= document.getElementById("foto")
foto.src=producto.foto

let titulo=document.getElementById("titulo")
titulo.textContent=producto.nombre

let valor=document.getElementById("valor")
valor.textContent=producto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=producto.descripcion
}