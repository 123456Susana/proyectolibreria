export function ampliarInfoProducto(evento){
    //el parentElement en este caso escucha la tarjeta, si ponemos otro parentElement
    // escuha a columna, deacuerdo al orden de jerarquias
    //la palabra target se utiliza para mirar donde se va a realizar el evento, 
    //ejm aqui se va a realizar en la tarjeta o en el buscador se hizo en el input
    
    let producto={
        foto:evento.target.parentElement.querySelector("img").src,
        nombre: evento.target.parentElement.querySelector("h3").textContent,
        precio: evento.target.parentElement.querySelector("h2").textContent,
        descripcion: evento.target.parentElement.querySelector("p").textContent,
        popularidad: evento.target.parentElement.querySelector("h5").textContent,
    }
    return(producto)

}