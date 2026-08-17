//crear un componente producto que muestre:
//nombre, precio, descripción, imagen y un boton para comprar
import libro from "../assets/libro.jpg";
import "./ejerciciob.css";
const Ejerciciob =({nombre, precio, descripcion})=>{
    return(
        <div className="contenedor">
            <img src={libro} alt="Imagen del producto" />
            <h1>Libro: {nombre}</h1>
            <h3>Precio antes de impuestos: S/. {precio}</h3>
            <h3>Precio despues de impuestos: S/. {(precio + precio * 0.18).toFixed(2)}</h3>
            {
                precio>10?<span className="caro">Caro</span>:<span className="barato">Barato</span>
            }
            <p>{descripcion}</p>
            <div className="Boton">
              <button>Comprar</button>
            </div>
        </div>
    )
};
export default Ejerciciob;