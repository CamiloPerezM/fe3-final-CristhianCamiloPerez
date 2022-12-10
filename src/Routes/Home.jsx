import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {odontologo} = useContextGlobal()
  return (
    <main className="" >
      <h1>Inicio</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {odontologo.map(odontologo => (<Card key={odontologo.id} data = {odontologo} />))}
      </div>
    </main>
  )
}

export default Home