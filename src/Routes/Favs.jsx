import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favoritos} = useContextGlobal()
  
  return (
    <>
      <h1>Odontologos favoritos</h1>
      <div className="card-grid">
        {favoritos.map(item => {
          return(
            <Link to = {`/detail/${item.id}`} key = {item.id} className = "linkCard">
              <div className="card-grid">
                <div className="card">
                  <img src="./images/doctor.jpg" alt = "img-odontologo" className="imgOdontologo"/>
                  <p>{item.id}</p>
                  <p>{item.name}</p>
                  <p>{item.username}</p>
                </div>
              </div>
            </Link>
          )
        })}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
