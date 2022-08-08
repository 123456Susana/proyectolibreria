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

let popularidad=document.getElementById("star")
switch(producto.popularidad){
    case '1':{
        let estrella1=document.createElement('i')
        estrella1.classList.add('bi','bi-star-fill')

        popularidad.appendChild(estrella1)
        break;
    }

    case '2':{
        let estrella1=document.createElement('i')
        estrella1.classList.add ('bi','bi-star-fill')
        let estrella2=document.createElement('i')
        estrella2.classList.add ('bi','bi-star-fill')

        popularidad.appendChild(estrella1)
        popularidad.appendChild(estrella2)
        break;
    }

    case '3':{
        let estrella1=document.createElement('i')
        estrella1.classList.add ('bi','bi-star-fill')
        let estrella2=document.createElement('i')
        estrella2.classList.add ('bi','bi-star-fill')
        let estrella3=document.createElement('i')
        estrella3.classList.add ('bi','bi-star-fill')

        popularidad.appendChild(estrella1)
        popularidad.appendChild(estrella2)
        popularidad.appendChild(estrella3)
        break;
    }

    case '4':{
        let estrella1=document.createElement('i')
        estrella1.classList.add ('bi','bi-star-fill')
        let estrella2=document.createElement('i')
        estrella2.classList.add ('bi','bi-star-fill')
        let estrella3=document.createElement('i')
        estrella3.classList.add ('bi','bi-star-fill')
        let estrella4=document.createElement('i')
        estrella4.classList.add ('bi','bi-star-fill')

        popularidad.appendChild(estrella1)
        popularidad.appendChild(estrella2)
        popularidad.appendChild(estrella3)
        popularidad.appendChild(estrella4)
        break;
    }

    case '5':{
        let estrella1=document.createElement('i')
        estrella1.classList.add ('bi','bi-star-fill')
        let estrella2=document.createElement('i')
        estrella2.classList.add ('bi','bi-star-fill')
        let estrella3=document.createElement('i')
        estrella3.classList.add ('bi','bi-star-fill')
        let estrella4=document.createElement('i')
        estrella4.classList.add ('bi','bi-star-fill')
        let estrella5=document.createElement('i')
        estrella5.classList.add ('bi','bi-star-fill')

        popularidad.appendChild(estrella1)
        popularidad.appendChild(estrella2)
        popularidad.appendChild(estrella3)
        popularidad.appendChild(estrella4)
        popularidad.appendChild(estrella5)
        break;
    }

}

}