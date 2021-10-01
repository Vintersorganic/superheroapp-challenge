import React from 'react'
import { Row, Col, Card, ListGroupItem, Button, ListGroup, ButtonGroup } from 'react-bootstrap'
import './heroteam.css'
import { LinkContainer } from 'react-router-bootstrap'

const HeroTeam = ({ teamHeroes, setTeamHeroes }) => {

  console.log(teamHeroes)

  const deleteHeroes = (id) => {

    const updatedHeroesTeam = teamHeroes.filter(teamHeroe => teamHeroe.id !== id )
    setTeamHeroes(updatedHeroesTeam)
  }

  if (teamHeroes.length < 1) {
    return null
  }

  return (
    <div >
      <Row xs={1} md={2} lg={6} className="card-row mb-3" style={{ margin: 'auto' }}>
        {teamHeroes.map(superheroe => {
          return  (
            <Col key={Number(superheroe.id)}>
              <Card border={superheroe.biography.alignment === 'good' ? 'success' : 'danger'} className="mt-3 single-card" >
                <Card.Header className='text-center font-weight-bold'>{superheroe.name}</Card.Header>
                <Card.Img variant='top' src={superheroe.image.url} className="card-img"/>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <strong>Combate:</strong> { superheroe.powerstats.combat !== 'null' ?
                      superheroe.powerstats.combat : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Resistencia:</strong> { superheroe.powerstats.durability !== 'null' ?
                      superheroe.powerstats.durability : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Inteligencia:</strong> { superheroe.powerstats.intelligence !== 'null' ?
                      superheroe.powerstats.intelligence : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Poder:</strong> { superheroe.powerstats.power !== 'null' ?
                      superheroe.powerstats.power : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Velocidad:</strong> { superheroe.powerstats.speed !== 'null' ?
                      superheroe.powerstats.speed : '?'
                    }
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Fuerza:</strong> { superheroe.powerstats.strength !== 'null' ?
                      superheroe.powerstats.strength : '?'
                    }
                  </ListGroupItem>
                </ListGroup>
                <ButtonGroup>
                  <Button variant="outline-info" onClick={() => deleteHeroes(superheroe.id)}>Eliminar</Button>
                  <LinkContainer to={`/heroes/${superheroe.id}`}>
                    <Button variant="outline-info">Detalles</Button>
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
