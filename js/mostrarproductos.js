import { conexionAPI } from "./conexionAPI.js";
import { borrarProducto } from "./borrarProducto.js";

const lista = document.querySelector("[data-lista]")

function crearCard(id, nombre, precio, image){
    const producto = document.createElement("li");  
    producto.className = "card";
    producto.setAttribute("data-id", id);
    producto.innerHTML = `
        <img class="card__image" src="${image}">
        <h3 class="card__nombre">${nombre}</h3>
        <h3 class="card__precio">Precio: ${precio}</h3>
        <button class="eliminar__boton" type="submit" data-eliminar>Eliminar</button>
        `
    
    producto.querySelector("[data-eliminar]").addEventListener("click", borrarProducto);

    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();
    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.id, producto.nombre, producto.precio, producto.image)));
    console.log(lista)
}

listarProductos();