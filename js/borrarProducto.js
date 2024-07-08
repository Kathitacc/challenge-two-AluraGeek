import { conexionAPI } from "./conexionAPI.js";

async function borrarProducto(evento) {
    const botonEliminar = evento.target;
    const cardProducto = botonEliminar.closest(".card");
    const productoId = cardProducto.getAttribute("data-id");

    try {
        await conexionAPI.borrarProducto(productoId);
        console.log(`Producto con ID ${productoId} eliminado`);
        cardProducto.remove();
    } catch (error) {
        console.error("Error al borrar el producto:", error);
    }
}

 document.querySelectorAll("[data-eliminar]").forEach(boton => {
     boton.addEventListener("click", borrarProducto);
 });


export { borrarProducto };

