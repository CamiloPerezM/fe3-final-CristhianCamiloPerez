import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ data }) => {

  const {theme, setFavoritos, favoritos} = useContextGlobal()
  const {active, setActive} = useState(false)


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavoritos([
      ...favoritos,
      data,
    ])
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to = {`/detail/${data.id}`} key={data.id} className="linkCard">
          <img src="./images/doctor.jpg" alt="img-odontologo" className="imgOdontologo"/>
          <p>{data.id}</p>
          <p>{data.name}</p>
          <p>{data.username}</p>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => {
          addFav() 
          setActive(!active)}} className={`favBtn ${active ? "active" : ""}`} id = {theme.theme}>Add favorito ❤</button>
    </div>
  );
};

export default Card;