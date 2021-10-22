import React from 'react'
import { Container, Row, Col, Image, Table } from 'react-bootstrap'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'


const HeroDetails = () => {
  const heroDetails = useSelector(state => state.superheroes)
  const loading = useSelector(state => state.loading)

  if (loading) {
    return <LoadingSpinner />
  }

  else if (heroDetails.length < 1) {
    return <Redirect to='/home' />
  }

  return (
    <Container style={{ marginTop:100 }}>
      <Row>
        <Col>
          <h1 className='text-center'>{heroDetails.name}</h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col lg={3}>
          <Image src={heroDetails.image.url} rounded fluid/>
        </Col>
        <Col lg={9}>
          <Table hover >
            <thead className={heroDetails.biography.alignment === 'good' ? 'table-success' : 'table-danger'}>
              <tr>
                <th>Peso</th>
                <th>Altura</th>
                <th>Nombre</th>
                <th>Alias</th>
                <th>Color de ojos</th>
                <th>Color de cabello</th>
                <th>Lugar de trabajo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{heroDetails.appearance.weight[1]}</th>
                <th>{heroDetails.appearance.height[1]}</th>
                <th>{heroDetails.biography['full-name']}</th>
                <th>{heroDetails.biography.aliases[0]}</th>
                <th>{heroDetails.appearance['eye-color']}</th>
                <th>{heroDetails.appearance['hair-color']}</th>
                <th>{heroDetails.work.base}</th>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}



export default HeroDetails


