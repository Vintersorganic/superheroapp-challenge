import React from 'react'
import { Row, Col, Card, ListGroupItem, Button, ListGroup, ButtonGroup } from 'react-bootstrap'
import './heroteam.css'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { deleteHero } from '../../reducers/heroteamReducer'
import { superheroDetail, initializeEmptySuperheroes } from '../../reducers/superheroesReducer'

const HeroTeam = () => {

  const teamHeroes = useSelector(state => state.teamheroes)
  const dispatch = useDispatch()

  const handleDeleteHeroes = (id) => {
    dispatch(deleteHero(id))
  }

  const handleHeroDetail = (id) => {
    dispatch(initializeEmptySuperheroes())
    dispatch(superheroDetail(id))
  }

  if (teamHeroes.length < 1) {
    return null
  }

  return (
    <div >
      <Row xs={1} md={2} lg={6} className="card-row mb-3" style={{ margin: 'auto'  }}>
        {teamHeroes.map(superhero => {
          return  (
            <Col xs={12} sm={6} md={4} lg={2}  key={Number(superhero.id)}>
              <Card border={superhero.biography.alignment === 'good' ? 'success' : 'danger'} className="mt-2 single-card" >
                <Card.Header className='text-center font-weight-bold'>{superhero.name}</Card.Header>
                <Card.Img variant='top' src={superhero.image.url} className="card-img"/>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <strong>Combate:</strong> { superhero.powerstats.combat !== 'null' ?
                      superhero.powerstats.combat : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Resistencia:</strong> { superhero.powerstats.durability !== 'null' ?
                      superhero.powerstats.durability : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Inteligencia:</strong> { superhero.powerstats.intelligence !== 'null' ?
                      superhero.powerstats.intelligence : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Poder:</strong> { superhero.powerstats.power !== 'null' ?
                      superhero.powerstats.power : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Velocidad:</strong> { superhero.powerstats.speed !== 'null' ?
                      superhero.powerstats.speed : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Fuerza:</strong> { superhero.powerstats.strength !== 'null' ?
                      superhero.powerstats.strength : '?'
                    }
                  </ListGroupItem>
                </ListGroup>
                <ButtonGroup>
                  <Button variant="outline-info" onClick={() => handleDeleteHeroes(superhero.id)}>Eliminar</Button>
                  <LinkContainer to={`/heroes/${superhero.id}`}>
                    <Button variant="outline-info" onClick={() => handleHeroDetail(superhero.id)}>Detalles</Button>
                  </LinkContainer>
                </ButtonGroup>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default HeroTeam
