export function pintarResumenCompra(fotoURL,nombreMensaje, banderaBoton, banderaPrecio, precioProducto, banderaCantidad,cantidadProducto, banderaSubtotal, subtotalProducto){

    //crear una referencia para almacenar el contenedor
    let contenedor=document.getElementById("contenedor")

    let fila=document.createElement("div")
    fila.classList.add("row")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12", "col-md-4", "border-end")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12", "col-md-6", "align-self-center")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=fotoURL

    let nombre=document.createElement("h3")
    nombre.textContent=nombreMensaje

    let boton=document.createElement("a")
    boton.classList.add("btn", "btn-primary","w-50", "d-block")
    boton.textContent="Ir a la tienda"
    boton.setAttribute("href", "./productos.html")

    let precio=document.createElement("h2")
    precio.textContent="Precio Und: "+precioProducto

    let cantidad=document.createElement ("h2")
    cantidad.textContent="Cantidad:  "+cantidadProducto

    let subtotal=document.createElement ("h3")
    subtotal.textContent="Subtotal: "+subtotalProducto

    //jerarquia
    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    if(banderaBoton){
        columna2.appendChild(boton)
    }
    if(banderaPrecio){
        columna2.appendChild(precio)
    }
    if(banderaCantidad){
        columna2.appendChild(cantidad)
    }
    if(banderaSubtotal){
        columna2.appendChild(subtotal)
    }
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
}
