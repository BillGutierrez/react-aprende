// Creando nuestro Hock useAxios

import { useState, useEffect } from "react";
import axios from "axios";
import Carga from "../minicompra/Carga";
import Error from "../minicompra/Error";
import CajaProducto from "../minicompra/CajaProducto";

const useAxios = ({ url, metodo, datos = {} }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .request({
        method: metodo,
        url: url,
        data: datos,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, metodo]);

  return { data, loading, error };
};

const Ejercicio7 = () => {
  const { data, loading, error } = useAxios({
    url: "https://dummyjson.com/products",
    metodo: "GET",
  });

  return loading ? (
    <Carga mensaje="Obteniendo productos" />
  ) : error ? (
    <Error mensaje={error} />
  ) : (
    <>
      {data.products
        ? data.products.map((producto) => (
            <CajaProducto key={producto.id} {...producto} />
          ))
        : null}
    </>
  );
};

export default Ejercicio7;
