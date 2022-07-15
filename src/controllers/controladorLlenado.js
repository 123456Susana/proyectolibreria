let productosBD=[
    {
        nombre:'John Katzenbach',
        precio: 200000,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/elpsicoanalista.jpg?alt=media&token=6f65352e-6264-4ad3-978a-b6ef0827ec9c', 'https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/juegosdeingenio.jpg?alt=media&token=8c8d76a7-b12a-4000-bc03-a7dddb6ea4f1'],
        descripcion:''
    }
    ,
    {
        nombre:'Stephen King',
        precio: 50000,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/1408.jpg?alt=media&token=71086004-67d3-402d-925a-368597745aaa','https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/cementeriodeanimales.jpg?alt=media&token=bcb56463-4e8f-4a84-b7d4-8d65eecd0789'],
        descripcion:''
    }
    ,
    {
        nombre:'Umberto Eco',
        precio: 55000,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/elnombredelarosa.jpg?alt=media&token=c1a6be1c-9d21-4ec9-aa83-9c6aa82cad23','https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/elpendulodefoucault.jpg?alt=media&token=631c62b1-428f-45c2-9799-071b70eefeab'],
        descripcion:''
    }
    ,
    {
        nombre:'Fiodor Dostoievski',
        precio: 61000,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/crimenycastigo.jpg?alt=media&token=7821f408-150c-4399-a5c9-98d097187fab','https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/loshermanoskaramazov.jpg?alt=media&token=62d81192-42c1-462e-8048-88ee1c8699bb'],
        descripcion:''
    }
    ,
    {
        nombre:'Agatha Christie',
        precio: 57500,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/asesinatoenelorientexpress.jpg?alt=media&token=f5846e1b-f703-449e-8088-026b6519e82e','https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/muerteenelnilo.jpg?alt=media&token=48c8c175-e858-4623-81a9-9b8859512a65'],
        descripcion:''
    }
    ,
    {
        nombre:'John Grisham',
        precio: 80000,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/latapadera.jpg?alt=media&token=7fd223a1-6acb-4482-9f8f-d48acf40d684','https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/tiempodematar.jpg?alt=media&token=c0cd3606-330a-4849-89b6-48b0a8c39667'],
        descripcion:''
    }
    ,
    {
        nombre:'Dan Brown',
        precio: 75600,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/elcodigodavinci.jpg?alt=media&token=f0e255a5-9241-41a4-bee2-a0029b53cf65','https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/inferno.jpg?alt=media&token=872f5494-9a46-4a2c-ab93-5c46f5f13c64'],
        descripcion:''
    }
    ,
    {
        nombre:'Mario Mendoza',
        precio: 80000,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/ladymasacre.jpg?alt=media&token=381b2450-2c7a-491f-b4d0-a86b584372b2','https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/satanas.jpg?alt=media&token=1d974805-f346-4c64-a7ef-ba49e8f04efc'],
        descripcion:''
    }
    ,
    {
        nombre:'Edgar Allan Poe',
        precio: 85000,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/lacaidadelacasausher.webp?alt=media&token=e4bff517-fc04-4321-aa7a-5164f9c464ca','https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/loscrimenesdelacallemorgue.jpg?alt=media&token=f8ff3683-1070-485e-a807-4985ad85e017'],
        descripcion:''
    }
    ,
    {
        nombre:'Mary Higgins Clark',
        precio: 85000,
        cantidad: 0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/mientrasmipreciosaduerme.jpg?alt=media&token=72704064-dec7-4e07-bf6b-cab2e7043af4','https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/ungritoenlanoche.jpg?alt=media&token=f5a19f25-f80b-4cdf-8373-3d9a4768c972'],
        descripcion:''
    }
]

//PASO PARA PINTAR (HACER RENDER) DE ETIQUETAS DE HTML DESDE JS
    //TRAVERSING

    //1. crear una referencia de memoria(variable) que almacena 
    //la etiqueta sobre la cual voy a pintar (ETIQUETA PADRE O ETIQUETA RAIZ)
    let fila=document.getElementById("fila")

    //2. RECORRO EL ARREGLO DE DATOS Y APLICO TRAVERSING
    productosBD.forEach(function(producto){
 
    //2.1 Creando una columna desde JS, solo se puede crear etiquetas que esten en html por ejm en este caso esta el div, no se podria poner ejm"juan" porque no existe
    let columna=document.createElement("div")
    columna.classList.add("col","my-3")

    //2.2 Creando la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","text-center")

    //2.3 Crando la foto
    let fotoProducto=document.createElement("img")
    fotoProducto.classList.add("img-fluid","w-100", "h-100")
    fotoProducto.src=producto.fotos[0]

    //2.4 creando el nombre del producto
    let nombreProducto=document.createElement("h3")
    nombreProducto.textContent=producto.nombre

    //2.5 creando el precio del producto
    let precioProducto=document.createElement("h2")
    precioProducto.classList.add("fw-bold")
    precioProducto.textContent='$'+producto.precio+' COL'

    //2.6 Detectando eventos
    columna.addEventListener("mouseover",function(){
        fotoProducto.src=producto.fotos[1]
    })

    columna.addEventListener("mouseleave",function(){
        fotoProducto.src=producto.fotos[0]
    })

    //3 DEFINO PADRES E HIJOS(se arma el rompecabezas, se va desde lo mas interno hasta lo mas externo)
    tarjeta.appendChild(fotoProducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    })