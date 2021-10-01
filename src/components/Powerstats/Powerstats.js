import React from 'react'
import { Table, Alert } from 'react-bootstrap'


const Powerstats = ({ teamHeroes }) => {
  if (teamHeroes.length < 0) {
    return null
  }

  const filteredPowerstatAverage = (heroTeam, powerstat) => {
    const filteredPowerstat = heroTeam.filter(da => da.powerstats[powerstat] !== 'null')
    if (filteredPowerstat.length < 1) {
      return 0
    }
    return filteredPowerstat.map(item => Number(item.powerstats[powerstat]))
      .reduce((a,b) => a + b)/filteredPowerstat.length
  }

  const powerstatsAverageObject = {
    inteligencia: filteredPowerstatAverage(teamHeroes, 'intelligence'),
    resistencia: filteredPowerstatAverage(teamHeroes, 'durability'),
    poder: filteredPowerstatAverage(teamHeroes, 'power'),
    combate: filteredPowerstatAverage(teamHeroes, 'combat'),
    velocidad: filteredPowerstatAverage(teamHeroes, 'speed'),
    fuerza: filteredPowerstatAverage(teamHeroes, 'strength') }

  const sortedPowerstats = Object.entries(powerstatsAverageObject).sort((a, b) => b[1] - a[1])

  return (
    <div>
      <h2 className='text-center' style={{ marginTop: 70 }}>
        ¡Tu equipo{teamHeroes.length < 1 ? '!' : ` es de ${sortedPowerstats[0][0]}!`}
      </h2>
      {teamHeroes.length < 1 && <Alert variant="danger" className='mt-3 text-center'>
                  ¡Tenés que agregar miembros al equipo! </Alert>
      }
      <Table className="mt-3 container" hover >
        <thead className='table-primary'>
          <tr className="text-center">
            <th>Combate</th>
            <th>Resistencia</th>
            <th>Inteligencia</th>
            <th>Poder</th>
            <th>Velocidad</th>
            <th>Fuerza</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th>{Math.round(powerstatsAverageObject.combate)}</th>
            <th>{Math.round(powerstatsAverageObject.resistencia)}</th>
            <th>{Math.round(powerstatsAverageObject.inteligencia)}</th>
            <th>{Math.round(powerstatsAverageObject.poder)}</th>
            <th>{Math.round(powerstatsAverageObject.velocidad)}</th>
            <th>{Math.round(powerstatsAverageObject.fuerza)}</th>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Powerstats
