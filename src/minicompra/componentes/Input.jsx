import "./input.css";

const Input = ({
  id,
  name,
  type = "text",
  texto = "",
  requerido = false,
  validador = null,
  value = "",
  change = null,
}) => {
  let temporal = null;
  if (validador) {
    temporal = { pattern: validador };
  }

  const handleChange = (e) => {
    e.preventDefault();
    if (change) {
      change({
        name: e.target.name,
        value: e.target.value,
      });
    }
  };

  return (
    <div className="contenedor_input">
      <label htmlFor={id}> {texto} </label>
      <div className="myInput">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          required={requerido}
          onChange={handleChange}
          {...temporal}
        ></input>
      </div>
    </div>
  );
};

export default Input;
