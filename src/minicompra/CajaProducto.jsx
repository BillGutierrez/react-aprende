import './cajaproducto.css';

const CajaProducto = ({ id, stock, price, category, thumbnail, title, addCarrito = null }) => {
    const handleClick = (e)=> {
        e.preventDefault();
        if (addCarrito) addCarrito(id);
    };

    return (
        <div className='Contenedor_cajaproducto'>
            <img src={thumbnail} alt={title} />
            <h1>
                {title}
            </h1>
            <span>Categoría: {category}</span>
            <span>Precio: ${price.toFixed(2)}</span>
            <span>Stock: {stock}</span>
            <button onClick={handleClick}>+ Carrito</button>
        </div>
    );
};

export default CajaProducto;