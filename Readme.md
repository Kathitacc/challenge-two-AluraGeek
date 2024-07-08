# Alura Geek Kathitacc - Alura Latam

Desarrollo FrontEnd conectando a base de datos fake en jason-server para almacenar información de productos, como: nombre, precio e imagen.

## Funcionalidades

- Agregar productos a la base de datos
- Presentar la lista de productos en pantall
- Eliminar productos

##Estructura

- index.hmtl: Estrutura de la página web
- db.json: Base de datos abstraida en un .json con la información de los productos en formato clave:valor con el id, nombre, precio e imagen
- borrarProducto.js, crearProducto.js, mostrarProductos.js: Archivos de las funcionalidades

## Cómo Usar

1. Iniciar el servidor json-server --watch db.json, el servidor se inicia en http://localhost:3000/productos
2. Deployer con LiveServer desde index.html
3. Usar las funcionalidades

## Instalación

Verificar la instalacion de node.js y npm para ejercutar el servidor

node -v (Debe ser superior a v14.0)
npm -v

En caso de no estar instaldos

sudo apt update
sudo apt install nodejs npm
sudo npm install -g json-server

## Autores

- Katherine Carrasco Chirinos - Kathitacc




