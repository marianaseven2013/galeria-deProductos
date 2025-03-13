

async function productosAPI() {
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
/*         console.log("API",data);
 */        
        
    }catch(error){console.error("error: ", error) }
    
  
}
export {productosAPI}
/* function productos(){
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {return data});
} */

/* function retornar(datos){
    console.log(datos)
    return datos

} */

