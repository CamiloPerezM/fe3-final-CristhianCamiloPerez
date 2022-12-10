import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params = useParams()
  const navigate = useNavigate()
  const {odontologo} = useContextGlobal()
  const data = odontologo[params.id - 1]

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='cont-cardDetail'>
        <div className='cardDetail'>
          <img src='/images/doctor.jpg' alt='img-odontologo' className='imgOdontologo'/>
          <p>Nombre : {data.name}</p>
          <p>Correo : {data.email}</p>
          <p>Telefono : {data.phone}</p>
          <p>Sitio web : {data.website}</p>
          <button onClick={() => navigate(-1)} className="btnBack">regresar</button>
        </div>
      </div>
    </>
  )
}

export default Detail