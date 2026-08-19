import { useState, useEffect } from "react";

const UseWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
};


const Ejercicio9 = () => {
 const size = UseWindowSize();
 return (
    <center>
        <p>El ancho es: {size.width}px</p>
        <p>El alto es: {size.height}px</p>
    </center>
 )
};
export default Ejercicio9;
