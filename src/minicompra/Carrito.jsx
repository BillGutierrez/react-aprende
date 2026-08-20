import './carrito.css';
import CajaCarrito from './CajaCarrito';
import { useState } from 'react';

const Carrito = ({ compras, quitarCarrito }) => {

    const [open, setOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    return (
        <div className='contenedor_carrito'>
            <button onClick={handleClick}>Carrito</button>
            <div className={`${open ? "" : "hidden"}`}>
                {
                    compras.length === 0
                        ? <p className="carrito_vacio">No hay elementos agregados</p>
                        : compras.map(compra => (
                            <CajaCarrito
                                key={`carrito-${compra.id}`}
                                {...compra}
                                quitarCarrito={quitarCarrito}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default Carrito;