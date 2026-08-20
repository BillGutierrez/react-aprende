//crear una funcion que me seleccione un determinado producto
const Ejercicio3 = () => {
    const seleccionarProducto = (event, id, nombre, precio) => {
        console.info(`Seleccionaste el producto con id: ${id},${event.target}, nombre: ${nombre}, precio: ${precio}`);
    };
    return(
        <button onClick={(event) => seleccionarProducto(event, 25, "Galleta oreo", 1.00)}>
            Seleccionar producto
        </button>
    );
};
export default Ejercicio3;
