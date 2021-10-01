import React from 'react'
import { Table, Alert } from 'react-bootstrap'


const Powerstats = ({ teamHeroes }) => {
  let combat = 0
  let durability = 0
  let intelligence = 0
  let power = 0
  let speed = 0
  let strength = 0
  if (teamHeroes.length > 0 ) {
    const filteredCombat = teamHeroes
      .filter(heroe => heroe.powerstats.combat !== 'null')
    combat =   filteredCombat.map(item => Number(item.powerstats.combat))
      .reduce((a,b) => a + b)/filteredCombat.length

    const filteredDurability = teamHeroes
      .filter(heroe => heroe.powerstats.durability !== 'null')
    durability=     filteredDurability.map(item => Number(item.powerstats.durability))
      .reduce((a,b) => a + b)/filteredDurability.length

    const filteredIntelligence = teamHeroes.filter(heroe => heroe.powerstats.intelligence !== 'null')
    intelligence = filteredIntelligence.map(item => Number(item.powerstats.intelligence))
      .reduce((a,b) => a + b)/filteredIntelligence.length

    const filteredPower = teamHeroes.filter(heroe => heroe.powerstats.power !== 'null')
    power  =  filteredPower.map(item => Number(item.powerstats.power))
      .reduce((a,b) => a + b)/filteredPower.length

    const  filteredSpeed = teamHeroes
      .filter(heroe => heroe.powerstats.speed !== 'null')
    speed=   filteredSpeed.map(item => Number(item.powerstats.speed))
      .reduce((a,b) => a + b)/filteredSpeed.length

    const   filteredStrength = teamHeroes
      .filter(heroe => heroe.powerstats.strength !== 'null')
    strength= filteredStrength.map(item => Number(item.powerstats.strength))
      .reduce((a,b) => a + b)/filteredStrength.length

  }

  const powerstatsAverageObject = { inteligencia: intelligence,
    resistencia: durability, poder: power, combate: combat, velocidad: speed,
    fuerza: strength }
  const d = Object.entries(powerstatsAverageObject).sort((a, b) => b[1] - a[1])

  return (
    <div>
      <h2 className='text-center' style={{ marginTop: 70 }}>¡Tu equipo{teamHeroes.length < 1 ? '!' : ` es de ${d[0][0]}!`} </h2>
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
            <th>{Math.round(combat)}</th>
            <th>{Math.round(durability)}</th>
            <th>{Math.round(intelligence)}</th>
            <th>{Math.round(power)}</th>
            <th>{Math.round(speed)}</th>
            <th>{Math.round(strength)}</th>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Powerstats
