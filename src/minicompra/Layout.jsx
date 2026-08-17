import "./layout.css";
import Menu from "./Menu";
import CajaProducto from "./CajaProducto";

const Layout = ({ children, carrito }) => {
  return (
    <>
      <Menu appname="Mi compra" carrito={carrito} />
      <div className="contenedor_productos">{children}</div>
    </>
  );
};

export default Layout;
