// Empleando el useMemo

import { useMemo, useState, useEffect } from "react";

const Ejercicio5 = () => {
  console.info("calculando la media");
  const [datos, setDatos] = useState([]);
  const [contador, setContador] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setContador(contador + 1);
  };

  const media = useMemo(() => {
    console.info("Calculando la media");
    const suma = datos.reduce((acumulador, dato) => acumulador + dato, 0);
    const media = suma / datos.length;
    return media;
  }, [datos]);

  const generarDatos = () => {
    const datos_generados = Array.from(
      { length: 7000 },
      () => Math.floor(Math.random() * 100) + 1,
    );

    return datos_generados;
  };
const handleClickGenerar = (e)=> {
    console.info("Volviendo a generar")
    e.preventDefault();
    setDatos(generarDatos());
}
  useEffect(() => {
    setDatos(generarDatos());
  }, []);
  return (
    <div>
      <h1 onClick={handleClick}> Contador: {contador}</h1>
      <p>Media: {media}</p>
      <button onClick={handleClickGenerar} >Generar datos</button>
    </div>
  );
};

export default Ejercicio5;
