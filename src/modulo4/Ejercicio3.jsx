import "./ejercicio3.css";
import { useRef, useState } from "react";
import Input from "../minicompra/componentes/Input";
import {
  IconHeart,
  IconHeartFilled,
  IconShare3,
  IconMessageCircle,
} from "@tabler/icons-react";

const Ejercicio3 = () => {
  const reproductor = useRef();
  const [like, setLike] = useState(false);
  const [comentarioOcultar, setComentarioOcultar] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const r = reproductor.current;
    if (r.paused) {
      r.play();
    } else {
      r.pause();
    }
  };

  const clickLike = (e) => {
    e.preventDefault();
    setLike(!like);
  };
  const ocultarcomentario = (e) => {
    e.preventDefault();
    setComentarioOcultar(!comentarioOcultar);
  };

  return (
    <div className="contenedor_video">
      <div className="video">
        <video
          src="video.mp4"
          ref={reproductor}
          className="reproductor"
          onClick={handleClick}
        ></video>
        <div className="contenedor_botones">
          <div className="boton_social">
            {like ? (
              <IconHeartFilled onClick={clickLike} stroke={2} size={34} />
            ) : (
              <IconHeart onClick={clickLike} stroke={2} size={34} />
            )}
          </div>
          <div className="boton_social">
            <IconShare3 stroke={2} size={34} />
          </div>
          <div className="boton_social">
            <IconMessageCircle
              onClick={ocultarcomentario}
              stroke={2}
              size={34}
            />
            {}
          </div>
        </div>
        {!comentarioOcultar && (
          <div className="contenedor_comentario">
            <Input id="comentario" name="comentario" texto="Comentar" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ejercicio3;
