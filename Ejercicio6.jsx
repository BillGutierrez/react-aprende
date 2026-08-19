// Empleando el useCallback

import { useState, useCallback, useEffect } from "react";

const Ejercicio6 = () => {
  const [numero, setNumero] = useState(0);
  const elegirNumero = useCallback(() => {
    console.info(`El numero elegido es: ${numero}`);
  });
  useEffect(() => {
    setInterval(() => {
      const naleatorio = Math.floor(Math.random() * 100) + 1;
      setNumero(naleatorio);
    }, 500);
    return () => {
        // clearInterval(interv);
    };
    
  }, []);
  return (
    <div>
      <h1> Numero: {numero}</h1>
      <button onClick={elegirNumero}>Elegir</button>
    </div>
  );
};

export default Ejercicio6;
