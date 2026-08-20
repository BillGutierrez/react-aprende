//crear un carrito de compras
import { useState } from "react";
import CajaProducto from "./CajaProducto";
import "./ejercicio5.css";
const Ejercicio5 = () => {
    const [productos, setProductos] = useState([
    {id:1, nombre:"Pistola Baykal Calibre .380", precio: 1600, imagen: "https://impalasportsac.com.pe/wp-content/uploads/2023/02/PISTOLA-ZASTAVA-EZ9-NEGRO.jpg"},
    {id:2, nombre:"Pistola Bersa Thunder Calibre .380 ACP", precio: 1980, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0SG04DXBypMaMUhDPTzARZfCWl6KgiJzd3iwX8fvBetO_unu4eRlm3k&s=10"},
    {id:3, nombre:"Revólver Taurus 82 Calibre .38 Special", precio: 2200, imagen: "https://impalasportsac.com.pe/wp-content/uploads/2026/06/revolver-taurus-calibre-38.jpg"},
    {id:4, nombre:"Pistola Zastava EZ-9 Calibre 9mm PB", precio: 2450, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GIWTxAxmjJL7Nc8jv-a06J2IQDM6xMP28KBOvBlf99EfcQh9FODs18Pi&s=10"},
    {id:5, nombre:"Pistola Taurus G2C Calibre 9mm PB", precio: 2775, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopYq5wSqPmaCzWUnSi-0rvV9F6qOm1xrgMBONwkeTVdvIK-OLZwPKVdw&s=10"},
    {id:6, nombre:"Pistola Smith & Wesson M&P9 M2.0 Calibre 9mm PB", precio: 3450, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopYq5wSqPmaCzWUnSi-0rvV9F6qOm1xrgMBONwkeTVdvIK-OLZwPKVdw&s=10"},
    {id:7, nombre:"Pistola Glock 25 Calibre .380 ACP", precio: 3600, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopYq5wSqPmaCzWUnSi-0rvV9F6qOm1xrgMBONwkeTVdvIK-OLZwPKVdw&s=10"},
    {id:8, nombre:"Pistola Glock 19 Gen 5 Calibre 9mm PB", precio: 4200, imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopYq5wSqPmaCzWUnSi-0rvV9F6qOm1xrgMBONwkeTVdvIK-OLZwPKVdw&s=10"},
    ]);
    const [carrito, setCarrito] = useState([]);

    const handleSeleccionador = (producto)=> {
        console.info("manjando la seleccion del producto");
        const nuevos_productos = productos.filter((p) => p.id !==producto.id);
        const nuevo_carrito = [...carrito, producto];
        setProductos(nuevos_productos);
        setCarrito(nuevo_carrito);
    };
    const handleEliminador =(producto)=> {
        const nuevos_productos = [...productos, producto];
        const nuevo_carrito = carrito.filter ((p) => p.id !== producto.id);
        setProductos (nuevos_productos);
        setCarrito (nuevo_carrito);
    };
    return(
        <div className="contenedor_lista">
            <div className="lista">
                <h2>Lista de productos</h2>
                {
                    productos.map((producto)=>(<CajaProducto key={producto.id} producto={producto} seleccionador = {handleSeleccionador} />))
                }
            </div>
            <div className="lista">
                <h2>Carrito de compras</h2>
                {
                    carrito.map((producto)=>(<CajaProducto key={producto.id} producto={producto} listado = {false} eliminador ={handleEliminador} />))
                }
            </div>
        </div>
    );
};
export default Ejercicio5;