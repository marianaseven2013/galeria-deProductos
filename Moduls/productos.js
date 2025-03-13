function crearProducto(imagen, precio, descripcion) {
    // Crear un contenedor para el producto
    const productoContenedor = document.createElement('div');
    productoContenedor.classList.add('producto');
    
  
    // Crear el elemento de imagen
    const imagenProducto = document.createElement('img');
    imagenProducto.src = imagen;
    imagenProducto.alt = 'Imagen del producto';
  
    // Crear el elemento de precio
    const precioProducto = document.createElement('p');
    precioProducto.classList.add('precio');
    precioProducto.textContent = `Precio: $${precio}`;
  
    // Crear el elemento de descripción
    const descripcionProducto = document.createElement('p');
    descripcionProducto.classList.add('descripcion');
    descripcionProducto.textContent = descripcion;
  
    // Añadir la imagen, precio y descripción al contenedor
    productoContenedor.appendChild(imagenProducto);
    productoContenedor.appendChild(precioProducto);
    productoContenedor.appendChild(descripcionProducto);
  
    // Devolver el contenedor con el contenido
    return productoContenedor;
  }
  
  // Ejemplo de uso:
/*   const producto = crearProducto('ruta/a/imagen.jpg', 25.99, 'Este es un excelente producto.');
  document.body.appendChild(producto); */

export {crearProducto}