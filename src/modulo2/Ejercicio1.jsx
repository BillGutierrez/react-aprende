//creando un componente para ver los eventos en react
const Ejercicio1 = () => {
    function pres2(){
        console.info("Presionaste el boton 2");
    };
    const pres3 = () => {
        console.info("Presionaste el boton 3");
    };
    return(
        <>
            <button
                onClick={(event) => {
                    console.info("Presionaste el boton");
                    console.info(event); //evento sintetico de react
                }}
            >
                Presionar1
            </button>
            <button
                onClick={pres2()} //Ya se ejecuta de forma automatica, se ejecuta al renderizar
            >
                Presionar2
            </button>
            <button
                onClick={pres3} //Sirve como referencia, el Onclick solo ncesita la funcion, no se ejecuta
            >
                Presionar3
            </button>
        </>
    );
};
export default Ejercicio1;