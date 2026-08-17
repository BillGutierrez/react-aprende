// crear un componente contador (actualizar el estado de un componente, es cuando se modifica algo que se muestra en la interfaz)
import { useState } from "react"; //usar los estados en react
const Ejercicio4 = () => {
    let [contador, setContador] = useState(0); //let es una palabra para referirse a variables, useState es un hook que permite crear un estado en un componente funcional, el primer valor es el valor inicial del estado, el segundo valor es una funcion que permite actualizar el estado
    const add = () => {
        contador+=1;
        setContador(contador); //actualiza el estado del contador, setContador es la funcion que permite actualizar el estado del contador
    }
    const rest = () =>{
        contador-=1;
        setContador(contador);
    }
    return (
        <>
            <p>
                Contador: {contador}
            </p>
            <button onClick={add}>+</button>
            <button onClick={rest}>-</button>
        </>
    );
};
export default Ejercicio4;