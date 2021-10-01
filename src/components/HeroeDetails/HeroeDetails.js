import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image, Table } from 'react-bootstrap'
import axios from 'axios'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const HeroeDetails = ({ setLoading, loading }) => {
  const id = useParams().id
  const [heroDetails, setHeroDetails] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/10158026026342484/${id}`)
      .then((response) => {
        setHeroDetails(response.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [setLoading, id])

  if (loading) {
    return <LoadingSpinner />
  }

  else if (heroDetails.length < 1) {
    return null
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



export default HeroeDetails


