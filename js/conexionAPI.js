async function listarProductos() {
    const conexion = await fetch("http://localhost:3000/productos",{
        method: "GET",
        headers:{
        "Content-type":"application/json",
        }
    });
    const conexionConvertida = await conexion.json();
    
    return conexionConvertida;
    
}

async function crearProducto(nombre,precio,image){
    const conexion = await fetch("http://localhost:3000/productos",{
        method: "POST",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify({
            nombre,
            precio,
            image
        })
    })
    
    const conexionConvertida=conexion.json();
    return conexionConvertida;
}

 async function borrarProducto(id){
     const conexion = await fetch(`http://localhost:3000/productos/${id}`,{
         method: "DELETE",
        
     });
     console.log(conexion);
     const conexionConvertida=conexion.json();
     return conexionConvertida;
 }

export const conexionAPI={
    listarProductos,crearProducto,borrarProducto
}
