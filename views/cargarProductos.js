import { productosAPI } from "../services/api.js";
import { crearProducto } from "../Moduls/productos.js";
/* 
console.log(productos()); */

/* productosAPI()
 *//* productos()
.then(data => {
    console.log(data);
}); */

async function mostrarProductos() {
    try{
       
        let datos = await productosAPI();
        console.log(datos);
        console.log("Helooo",productosAPI()); 
        todoslosProductos(datos);  
        
    }catch(error){console.error("error: ", error) }
    
}

/* function todoslosProductos(listaProductos){
 /*    listaProductos.forEach(Element => {
        console.log(Element)
    }) */
   /* onsole.log("Hola mundo");
} */

//-------------------------------------------------
function todoslosProductos(datos) {
    let DOM = document.querySelector("#root");
    datos.forEach(element => {
        console.log(element); 
        DOM.appendChild(crearProducto(element.image, element.price, element.description));
    });
}

export {mostrarProductos}