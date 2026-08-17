// crear un componente que me muestre las etapas del componente

import { useEffect, useState } from "react";

const Caja = ({ id, nombre, cantidad, modificar = null, eliminar = null }) => {
  const handleEliminar = (e) => {
    e.preventDefault();
    if (eliminar && eliminar != null) eliminar(id);
  };
  const handleModificar = (e) => {
    e.preventDefault();
    if (modificar && modificar != null) modificar(id);
  };

  useEffect(() => {
    console.info(`Componente caja renderizado -> ${id}`);
    return () => {
      console.info(`Componente caja eliminado -> ${id}`);
    };
  }, [id, cantidad]);

  return (
    <div>
      <p>{nombre}</p>
      <p>{cantidad}</p>
      <button onClick={handleEliminar}>Eliminar</button>
      <button onClick={handleModificar}>Modificar</button>
    </div>
  );
};

const Ejercicio1 = () => {
  const [cajas, setCajas] = useState([
    { id: 1, nombre: "Caja 1", cantidad: 5 },
    { id: 2, nombre: "Caja 2", cantidad: 8 },
    { id: 3, nombre: "Caja 3", cantidad: 15 },
    { id: 4, nombre: "Caja 4", cantidad: 8 },
    { id: 5, nombre: "Caja 5", cantidad: 16 },
  ]);
  const handleEliminar = (id) => {
    const nuevas_cajas = cajas.filter((caja) => caja.id != id);
    setCajas(nuevas_cajas);
  };
  const handleModificar = (id) => {
    const i = cajas.findIndex((caja) => caja.id === id);
    let nuevas_cajas = [...cajas];
    nuevas_cajas[i].cantidad += 1;
    setCajas(nuevas_cajas);
  };

  return (
    <>
      {cajas.map((caja) => (
        <Caja
          key={caja.id}
          id={caja.id}
          nombre={caja.nombre}
          cantidad={caja.cantidad}
          eliminar={handleEliminar}
          modificar={handleModificar}
        />
      ))}
    </>
  );
};

export default Ejercicio1;
