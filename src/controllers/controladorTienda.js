//se utiliza LLAVES con el import para encajonar lo que viene

import { productosBD } from "../helpers/baseDatos.js"
console.log(productosBD)

import { pintarProductos } from "./contorladorPintar.js"
//se llama la funcion
pintarProductos(productosBD)

import { buscarProductos } from "./controladorBuscar.js"
buscarProductos()