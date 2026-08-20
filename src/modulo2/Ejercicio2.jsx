//manejar el evento sintético de react
const Ejercicio2 = ()=>{
    const handleClick = (event) => {
        console.info(event.target);
        console.info(event.type);
        window.alert("Cuidado con el click");
        const t =event.target;
        t.style.backgroundColor = "#92EEFF";
        t.style.color = "black";
    };
    return (
        <button onClick={handleClick}>
            Presionar
        </button>
    );
};
export default Ejercicio2;