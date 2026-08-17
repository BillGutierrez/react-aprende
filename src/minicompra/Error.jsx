import "./error.css"

const Error = ({ mensaje }) => {
    return (
        <div className="contenedor_error">
            <p className="mensaje_error">{mensaje}</p>
        </div>
    );
};

export default Error;