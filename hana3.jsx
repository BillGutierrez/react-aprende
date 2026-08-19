import "./ejercicio3.css";
import { useRef, useState } from "react";
import Input from "../minicompra/componentes/Input";
import {IconHeart, IconHeartFilled, IconMessageCircle, IconShare} from "@tabler/icons-react"

const Ejercicio33 = () => {
  const reproductor = useRef();
  const [like, setLike]=useState(false);
  const [mostrarInput, setMostrarInput] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    const r = reproductor.current;
    if (r.paused) {
      r.play();
    } else {
      r.pause();
    }
  };
  const clickLike=(e)=>{
    e.preventDefault();
    setLike(!like);
  }

  const clickComentario = (e) => {
    e.preventDefault();
    setMostrarInput(!mostrarInput);
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
          <div>
            {like ? (
              <IconHeartFilled onClick={clickLike} stroke={2} size={34} />
            ) : (
              <IconHeart onClick={clickLike} stroke={2} size={34} />
            )}
          </div>
          <div>
            <IconMessageCircle onClick={clickComentario} stroke={2} size={34} />
          </div>
          <div>
            <IconShare stroke={2} size={34} />
          </div>
        </div>
        {mostrarInput && (
          <div className="contenedor_comentario">
            <Input id="comentario" name="comentario" texto="Comentar" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ejercicio33;