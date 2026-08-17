//componente para cada producto
import "./cajaproducto.css";
const CajaProducto = ({producto, seleccionador=null, eliminador=null, listado=true}) => {
    const handleclick = (event) => {
        event.preventDefault(); //evita que se recargue la pagina
        if(listado&&seleccionador){
                seleccionador(producto);
        } else{
            if (!listado && eliminador) 
                eliminador(producto);
        }
    };
    return(
        <div className="caja_producto">
            <img src={producto.imagen} alt={producto.nombre} width={200} />
            <h2>{producto.nombre}</h2>
            <p>Precio: {producto.precio}</p>
            <button onClick={handleclick}>
                {listado ? "Agregar al carrito" : "Quitar del carrito"}
            </button>
        </div>
    );
};
export default CajaProducto;