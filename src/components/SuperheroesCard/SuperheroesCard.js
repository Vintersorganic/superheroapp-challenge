import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import './superheroescard.css'


const SuperheroesCard = ({ superHeroes, teamHeroes, setTeamHeroes, message }) => {
  if (!superHeroes) {
    return null
  }

  const addHeroes = async (hero) => {
    const bad = teamHeroes.filter(h => h.biography.alignment === 'bad').length
    const good = teamHeroes.filter(h => h.biography.alignment === 'good').length
    if (teamHeroes.length < 1 ) {
      setTeamHeroes(teamHeroes.concat(hero))
    }
    else if (bad === 3 && hero.biography.alignment === 'bad') {
      alert('Máximo 3 héroes de orientación mala.')
    }
    else if (good === 3  && hero.biography.alignment === 'good') {
      alert('Máximo 3 héroes de orientación buena.')
    } else if (teamHeroes.length === 6) {
      alert('¡Ya tenés la máxima cantidad de héroes en tu equipo!')
    }
    else {
      (teamHeroes.find(h => h.id === hero.id) === undefined)
        ? setTeamHeroes(teamHeroes.concat(hero))
        : alert(`¡${hero.name} ya está en tu equipo!`)
    }
  }

  console.log(teamHeroes, 'TEAM HEROES')

  return (
    <div className='container'>
      {message && <p>A:SDKASDKASD</p>}
      <h1 className="superheroescard-header text-center">¡Elegí a los miembros de tu equipo!</h1>
      <Row xs={1} md={2} lg={4} className="card-row">
        {superHeroes.map(superheroe => {
          return  (
            <Col key={Number(superheroe.id)}>
              <Card border={superheroe.biography.alignment === 'good' ? 'success' : 'danger'} className="mt-5" style={{ width: '12rem' }}>
                <Card.Header className='text-center font-weight-bold'>{superheroe.name}</Card.Header>
                <Card.Img variant='top' src={superheroe.image.url} className="card-img"/>
                <Button variant="outline-info" onClick={() => addHeroes(superheroe)}>Agregar</Button>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default SuperheroesCard
