import "./checkinput.css";
import { useState } from "react";

const CheckInput = ({ id, name, texto, value = false, change = null }) => {
  //const [check, setCheck] = useState(false);
  const handleChange = (e) => {
    //e.preventDefault();
    console.info(e.target.checked);
    //setCheck(e.target.checked);
    if(change){
      change({
        name: e.target.value,
        value: e.target.checked
      });
    }
  };

  return (
    <label htmlFor={id} className="contenedor_check">
      <input
        type="checkbox"
        name={name}
        id={id}
        className="oculto"
        checked={value}
        onChange={handleChange}
      />
      <span className={`mi_check ${value ? "es_check" : ""} `}></span>
      <span className="texto_check"> {texto} </span>
    </label>
  );
};

export default CheckInput;
