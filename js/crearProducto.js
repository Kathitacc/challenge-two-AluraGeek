
import { conexionAPI } from "./conexionAPI.js";
import { borrarProducto } from "./borrarProducto.js";

const formulario = document.querySelector("[data-formulario]");


async function crearProducto(evento){    

    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const image = document.querySelector("[data-image]").value;
    await conexionAPI.crearProducto(nombre,precio,image)    
 
}

formulario.addEventListener("submit", evento => crearProducto(evento));

function crearCard(id, nombre, precio, image) {
    const producto = document.createElement("li");
    producto.className = "card";
    producto.setAttribute("data-id", id);
    producto.innerHTML = `
        <img class="card__image" src="${image}">
        <h3 class="card__nombre">${nombre}</h3>
        <h3 class="card__precio">Precio: ${precio}</h3>
        <button class="eliminar__boton" type="button" data-eliminar>Eliminar</button>`;
    
    producto.querySelector("[data-eliminar]").addEventListener("click", borrarProducto);
    
    return producto;
}