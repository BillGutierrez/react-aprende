import { useState } from "react";
import Input from "../minicompra/componentes/Input";
import CheckInput from "../minicompra/componentes/CheckInput";
import "./ejercicio2.css";

const Ejercicio2 = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    edad: 0,
    registro: false,
    dni:"",
  });

  const handleChange = (obj) => {
    let nuevo_formulario = { ...formulario };
    nuevo_formulario[obj.name] = obj.value;
    setFormulario(nuevo_formulario);
    console.info(
      `cambio en el elemento -> ${obj.name} al valor -> ${obj.value}`,
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.info("submit");
  };

  return (
    <div className="contenedor_registro">
      <form onSubmit={handleSubmit} className="Formulario_registro">
        <legend>Registro de usuario</legend>
        <Input
          id="dni"
          name="dni"
          texto="DNI"
          requerido={true}
          validador="[0-9]{8}"
          value={formulario.dni}
          change={handleChange}
        />
        <Input
          id="nombre"
          name="nombre"
          texto="Nombre"
          requerido={true}
          value={formulario.nombre}
          change={handleChange}
        />
        <Input
          id="apellido"
          name="apellido"
          texto="Apellido"
          requerido={true}
          value={formulario.apellido}
          change={handleChange}
        />
        <Input
          id="correo"
          name="correo"
          texto="Correo"
          type="email"
          requerido={true}
          value={formulario.correo}
          change={handleChange}
        />
        <Input
          id="edad"
          name="edad"
          texto="Edad"
          type="number"
          value={formulario.edad}
          change={handleChange}
        />

        <CheckInput
          id="registro"
          name="registro"
          texto="Permitir que me envien publicidad"
          value={formulario.registro}
          change={handleChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Ejercicio2;
