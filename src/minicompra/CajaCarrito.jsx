import "./cajacarrito.css";

const CajaCarrito = ({
  id,
  stock,
  price,
  category,
  thumbnail,
  title,
  cantidad,
  quitarCarrito = null,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (quitarCarrito) quitarCarrito(id);
  };

  return (
    <div className="Contenedor_CajaCarrito">
      <img src={thumbnail} alt={title} />
      <span className="titulo_cajacarrito">{title}</span>
      <span className="cantidad_cajacarrito">x{cantidad}</span>
      <button onClick={handleClick}>- Carrito</button>
    </div>
  );
};

export default CajaCarrito;