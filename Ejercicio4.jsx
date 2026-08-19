// usando React.memo
import React, { useState } from "react";

const UsuarioMemo = React.memo(({ nombre }) => {
  console.info("Renderizando memo");
  return <p>Usuario: {nombre}</p>;
});

const ApellidoComponent = ({ apellido }) => {
  console.info("renderizando apellido");
  return <p>Apellido: {apellido}</p>;
};

const ApellidoMemo = React.memo(ApellidoComponent);

const Ejercicio4 = () => {
  const [contador, setContador] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setContador(contador + 1);
  };

  return(
    <div>
        <h1 onClick={handleClick}>
            Contador: {contador}
        </h1>
        <UsuarioMemo nombre="CN" />
        <ApellidoMemo apellido="AB" />
    </div>
  );
};

export default Ejercicio4;
