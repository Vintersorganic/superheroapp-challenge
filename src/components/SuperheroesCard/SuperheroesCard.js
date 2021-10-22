import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import './superheroescard.css'
import { addHero } from '../../reducers/heroteamReducer'


const SuperheroesCard = () => {

  const dispatch = useDispatch()
  const superHeroes = useSelector(state => state.superheroes)
  const teamHeroes = useSelector(state => state.teamheroes)

  const addHeroes = async (hero) => {
    const bad = teamHeroes.filter(h => h.biography.alignment === 'bad').length
    const good = teamHeroes.filter(h => h.biography.alignment === 'good').length
    if (teamHeroes.length < 1 ) {
      dispatch(addHero(hero))
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
        ? dispatch(addHero(hero))
        : alert(`¡${hero.name} ya está en tu equipo!`)
    }
  }

  if (!Array.isArray(superHeroes)) {
    return null
  }

  return (
    <div className='container'>
      <h1 className="superheroescard-header text-center">¡Elegí a los miembros de tu equipo!</h1>
      <Row xs={1} md={2} lg={4} className="card-row">
        {superHeroes.map(superhero => {
          return  (
            <Col key={Number(superhero.id)}>
              <Card border={superhero.biography.alignment === 'good' ? 'success' : 'danger'} className="mt-5" style={{ width: '12rem', margin: 'auto' }}>
                <Card.Header className='text-center font-weight-bold'>{superhero.name}</Card.Header>
                <Card.Img variant='top' src={superhero.image.url} className="card-img"/>
                <Button variant="outline-info" onClick={() => addHeroes(superhero)}>Agregar</Button>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default SuperheroesCard
