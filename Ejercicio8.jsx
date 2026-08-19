import { useState, useEffect } from "react";
import Input from "../minicompra/componentes/Input";

const UseLocalStorage = ({ clave, valor_inicial = "" }) => {
  const [valor, setValor] = useState(() => {
    const local = localStorage.getItem(clave);
    return local ? JSON.parse(local) : valor_inicial;
  });

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  return [valor, setValor];
};

const Ejercicio8 = () => {
  const [nombre, setNombre] = UseLocalStorage({ clave: "username" });
  const handleChage = (obj) => {
    setNombre(obj.value);
  };
  return (
    <form>
      <Input id="nombre" texto="Nombre" name="nombre" value={nombre} change={handleChage} />
    </form>
  );
};

export default Ejercicio8;
