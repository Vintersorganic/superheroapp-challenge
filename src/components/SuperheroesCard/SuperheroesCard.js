import React from 'react'
import { Card, Row, Col, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap'
import './superheroescard.css'


const SuperheroesCard = ({ superHeroes, addHeroes }) => {
    if (!superHeroes) {
        return null
    }
    return (
        <Row xs={1} md={2} lg={4} className="card-row"> 
            {superHeroes.map(superheroe =>{
                return  (
                    <Col key={Number(superheroe.id)}>
                        <Card border={superheroe.biography.alignment === "good" ? "success" : "danger"} className="mt-5" style={{ width: '12rem' }}>
                            <Card.Header className='text-center font-weight-bold'>{superheroe.name}</Card.Header>
                            <Card.Img variant='top' src={superheroe.image.url} className="card-img"/>
                            <ListGroup className="list-group-flush">
                               <ListGroupItem>
                               <strong>Inteligencia:</strong> { superheroe.powerstats.intelligence !== "null" ?
                                    superheroe.powerstats.intelligence : "?"
                                    }
                               </ListGroupItem>
                               <ListGroupItem>
                               <strong>Fuerza:</strong> { superheroe.powerstats.strength !== "null" ?
                                    superheroe.powerstats.strength : "?"
                                    }
                               </ListGroupItem>
                               <ListGroupItem>
                               <strong>Velocidad:</strong> { superheroe.powerstats.speed !== "null" ?
                                    superheroe.powerstats.speed : "?"
                                    }
                               </ListGroupItem>
                               <ListGroupItem>
                                   <strong>Resistencia:</strong> { superheroe.powerstats.durability !== "null" ?
                                    superheroe.powerstats.durability : "?"
                                    }
                               </ListGroupItem>
                               <ListGroupItem>
                               <strong>Poder:</strong> { superheroe.powerstats.power !== "null" ?
                                    superheroe.powerstats.power : "?"
                                    }
                               </ListGroupItem>
                               <ListGroupItem>
                               <strong>Combate:</strong> { superheroe.powerstats.combat !== "null" ?
                                    superheroe.powerstats.combat : "?"
                                    }
                               </ListGroupItem>      
                            </ListGroup>
                            
                            <Button variant="outline-info" onClick={() => addHeroes(superheroe)}>Agregar</Button>
                            {/* <Button variant="outline-info">Detalles</Button> */}
                          
                        </Card>
                    </Col>
                        )
                })}
        </Row>
    )
}

export default SuperheroesCard
