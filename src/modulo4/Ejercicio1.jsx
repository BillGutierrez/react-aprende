import { useState, useRef } from "react";

const Controlado = () => {
  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    console.info(e.target);
    console.info(e.target.value);
    setNombre(e.target.value);
  };

  return (
    <input
      name="controlado"
      value={nombre}
      onChange={handleChange}
      placeholder="Controlado"
    />
  );
};

const NoControlado = () => {
  return <input name="nocontrolado" placeholder="No controlado" />;
};

const Ejercicio1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.info(e.target);
    const formdata = new FormData(e.target);
    console.info.formdata.get("controlado");
    console.info.formdata.get("nocontrolado");

    
    const formulario = new FormData(e.target);

    console.info(formulario.get("controlado"));
    console.info(formulario.get("nocontrolado"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Controlado />
      <NoControlado />

      <button type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Ejercicio1;
