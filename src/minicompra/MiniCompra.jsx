import { useState, useEffect } from "react";
import Layout from "./Layout";
import Carrito from "./Carrito";
import axios from "axios";
import Carga from "./Carga";
import Error from "./Error";
import CajaProducto from "./CajaProducto";

const MiniCompra = () => {
  const [productos, setProductos] = useState([]);
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(null);
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.info(res.data);
        setProductos(res.data.products);
      })
      .catch((err) => {
        console.info(err.message);
        if (err.message) {
          setError(err.message);
        } else {
          setError("Error inesperado");
        }
      })
      .finally(() => {
        setCarga(false);
      });
  }, []);

  const handleAddCarrito = (id) => {
    const producto = productos.find((p) => p.id === id);
    if (!producto || producto.stock <= 0) return; // si no hay stock entonces no hacemos nada 

    // Reducimos el stock en productos
    setProductos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock - 1 } : p))
    );

    // En "compras": si ya existe, sumamos cantidad; si no, lo agregamos
    setCompras((prev) => {
      const yaExiste = prev.some((c) => c.id === id);
      if (yaExiste) {
        return prev.map((c) =>
          c.id === id ? { ...c, cantidad: c.cantidad + 1 } : c
        );
      }
      return [{ ...producto, cantidad: 1 }, ...prev];
    });
  };

  const handleQuitarCarrito = (id) => {
    // Devolvemos el stock en productos
    setProductos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock + 1 } : p))
    );

    // Restamos cantidad en compras, y si llega a 0, lo sacamos del todo
    setCompras((prev) =>
      prev
        .map((c) => (c.id === id ? { ...c, cantidad: c.cantidad - 1 } : c))
        .filter((c) => c.cantidad > 0)
    );
  };

  return carga ? (
    <Carga mensaje="Obteniendo productos" />
  ) : error ? (
    <Error mensaje={error} />
  ) : (
    <Layout carrito={<Carrito compras={compras} quitarCarrito={handleQuitarCarrito} />}>
      {productos.map((producto) => (
        <CajaProducto key={producto.id} addCarrito={handleAddCarrito} {...producto} />
      ))}
    </Layout>
  );
};

export default MiniCompra;
