// componente para mostrar varios usuarios

import { useState, useEffect } from "react";
import axios from "axios";

import "./Ejercicio2.css";

const UserCard = ({ usuario }) => {
  const [color, setColor] = useState("white");

  const cambioColor = () => {
    setColor((col) => (col === "white" ? "#92EEFF" : "white"));
  };

  return (
    <div className="contenedor_card" style={{ backgroundColor: color }}>
      <img src={usuario.image} alt={usuario.firstName} />

      <div className="info_card">
        <h3>{usuario.university}</h3>
        <p>{`${usuario.lastName} ${usuario.firstName}`}</p>
        <p>{usuario.ssn}</p>

        <div className="enlinea">
          <p>{usuario.gender}</p>
          <p>{usuario.birthDate}</p>
        </div>
        <button onClick={cambioColor}>Cambio</button>
      </div>
    </div>
  );
};

const Ejercicio2 = () => {
  const [cargando, setCargando] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://dummyjson.com/users")
        .then((res) => {
          console.info(res);
          setUsuarios(res.data.users);
        })
        .catch((err) => {
          console.info(err.message);
          if (err.message) {
            setError(err.message);
          } else {
            setError("Error inesperado");
          }
        })
        .finally((dev) => {
          console.info(dev);
          setCargando(false);
        });
    }, 300);
  }, []);

  return (
    <div className="contenedor_eje2">
      {cargando ? (
        <div className="loader-container">
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : error ? (
        <div className="contenedor_error">
          <p className="mensaje_error">{error}</p>
        </div>
      ) : (
        <div className="contenedor_usuarios">
          {usuarios.map((usuario) => (
            <UserCard key={usuario.id} usuario={usuario} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Ejercicio2;
