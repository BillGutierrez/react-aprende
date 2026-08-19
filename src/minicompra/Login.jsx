import Input from "./componentes/input";
import CheckInput from "./componentes/CheckInput";
import { useState } from "react";
import Error from "./Error";
import "./login.css";
import cos from "../assets/cos.jpg";

const Login = ({ handleLogin = null }) => {
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    if (fd.get("email") === "Bill@hola.com" && fd.get("password") === "123") {
      setTimeout(() => {
        if (handleLogin) handleLogin();
      }, 100);
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="contenedor_login">
      <div className="imagen_login">
        <img src={cos} alt="Login" />
      </div>

      <form onSubmit={handleSubmit} className="form_login">
        <legend>Login</legend>

        {error ? <Error mensaje={error} /> : null}

        <Input
          id="email"
          requerido={true}
          name="email"
          texto="Correo"
          type="email"
        />

        <Input
          id="password"
          requerido={true}
          name="password"
          texto="Contraseña"
          type="password"
        />

        <CheckInput id="recordar" name="recordar" texto="Recordar la sesion" />

        <button className="boton" type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
