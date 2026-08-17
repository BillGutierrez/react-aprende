//crear un componente layout para una aplicacion
import "./ejercicioc.css";
const Ejercicioc = ({children})=>{
    return (
        <>
            <header>
                <h1 className="app_name">Ibero Librerias</h1>
                <nav>
                    <a href="#">Carrito de compras</a>
                    <a href="#">Registrarse</a>
                    <a href="#">Iniciar sesión</a>
                    <a href="#">Borrar cuenta</a>
                </nav>
            </header>
            <div className="mybody">
                {children}
            </div>
        </>
    );
};
export default Ejercicioc;