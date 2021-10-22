import React from 'react'
import { Table, Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Powerstats = () => {
  const teamHeroes = useSelector(state => state.teamheroes)
  if (teamHeroes.length < 0) {
    return null
  }

  const powerstatSum = (heroTeam, powerstat) => {
    const filteredPowerstat = heroTeam.filter(da => da.powerstats[powerstat] !== 'null')
    if (filteredPowerstat.length < 1) {
      return 0
    }
    return filteredPowerstat.map(item => Number(item.powerstats[powerstat]))
      .reduce((a,b) => a + b)
  }

  const appearanceAverage = (heroTeam, feature, exception) => {
    const filteredAppearance = heroTeam.filter(a => a.appearance[feature][1] !== exception)
    if (filteredAppearance.length < 1) {
      return 0
    }
    const appearanceNumbersArray = filteredAppearance.map(item =>
      Number(item.appearance[feature][1].substring(0, item.appearance[feature][1].length - 3)))
    return Math.round(appearanceNumbersArray.reduce((a, b) => a + b)/appearanceNumbersArray.length)
  }

  const powerstatSumObject = {
    inteligencia: powerstatSum(teamHeroes, 'intelligence'),
    resistencia: powerstatSum(teamHeroes, 'durability'),
    poder: powerstatSum(teamHeroes, 'power'),
    combate: powerstatSum(teamHeroes, 'combat'),
    velocidad: powerstatSum(teamHeroes, 'speed'),
    fuerza: powerstatSum(teamHeroes, 'strength') }

  const sortedPowerstats = Object.entries(powerstatSumObject).sort((a, b) => b[1] - a[1])

  return (
    <div className='container'>
      <h2 className='text-center' style={{ marginTop: 70 }}>
        ¡Tu equipo{teamHeroes.length < 1 ? '!' : ` es de ${sortedPowerstats[0][0]}!`}
      </h2>
      {teamHeroes.length < 1 && <Alert variant="danger" className='mt-3 text-center'>
                  ¡Tenés que agregar miembros al equipo! </Alert>
      }
      <Table responsive bordered className="mt-3 container" hover >
        <thead className='table-primary'>
          <tr className="text-center">
            <th>Combate</th>
            <th>Resistencia</th>
            <th>Inteligencia</th>
            <th>Poder</th>
            <th>Velocidad</th>
            <th>Fuerza</th>
            <th>Altura Promedio</th>
            <th>Peso Promedio</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th>{powerstatSumObject.combate}</th>
            <th>{powerstatSumObject.resistencia}</th>
            <th>{powerstatSumObject.inteligencia}</th>
            <th>{powerstatSumObject.poder}</th>
            <th>{powerstatSumObject.velocidad}</th>
            <th>{powerstatSumObject.fuerza}</th>
            <th>{appearanceAverage(teamHeroes,'height', '0 cm')} cm</th>
            <th>{appearanceAverage(teamHeroes,'weight', '0 kg')} kg</th>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Powerstats
