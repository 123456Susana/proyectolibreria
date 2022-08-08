export function pintarProductos(productos){
    //1. crearuna referencia en memoria que traiga el html sobre el cual voy a pintar
    let fila=document.getElementById("fila")
    //inner significa dentro , en este caso significa borrar todo lo que hay dentro del html 
    fila.innerHTML=""

    //2.recorrer el arreglo de datos
    productos.forEach(function(producto){

        //creamos lo que necesita
        //2.1 creamos una columna
        let columna=document.createElement("div")
        columna.classList.add("col" ,"my-3")

        //2.2 creamos la tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100", "shadow", "text-center",)

        //2.3 creamos la foto
        let foto=document.createElement("img")
        foto.classList.add("img-fluid", "w-100", "h-100")
        foto.src=producto.fotos[0]

        //2.4 creamos el nombre
        let nombre=document.createElement("h3")
        nombre.textContent=producto.nombre

        //2.5 creamos el precio
        let precio=document.createElement("h2")
        precio.classList.add("fw-bold")
        precio.textContent= "$"+producto.precio
        

        //2.6 creamos la descripcion
        let descripcion=document.createElement("p")
        descripcion.classList.add("d-none")
        descripcion.textContent=producto.descripcion

        //2.7 creamos la popularidad
        let popularidad=document.createElement("h5")
        popularidad.classList.add("d-none")
        popularidad.textContent=producto.popularidad


        //deteccion de mouse
        columna.addEventListener("mouseover", function(evento){
            foto.src=producto.fotos[1]
        })
        columna.addEventListener("mouseleave", function(evento){
            foto.src=producto.fotos[0]
        })
        columna.addEventListener("click", function(evento){
            foto.src=producto.fotos[0]
        })

        //PADRES E HIJOS (ORDEN DE JERARQUIAS, quien va dentro de quien)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(popularidad)

        columna.appendChild(tarjeta)

        fila.appendChild(columna)

    })
}