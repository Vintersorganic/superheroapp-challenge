import React from 'react'
import {Form, Button, Container, Row, Col, Alert, Card} from 'react-bootstrap'
import loginIcon from '../../images/login-icon2.png'
import loginPageImage from '../../images/superheroes-6.png'
import './login.css'
import { useState } from 'react'
import {useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = ( {user, setUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [message, setMessage] = useState(null)
    const history = useHistory()
    
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://challenge-react.alkemy.org/', {email, password})
            setUser(response.data)
            window.localStorage.setItem(
                'loggedSuperheroAppUser', JSON.stringify(user.token)
              ) 
            setEmail('')
            setPassword('')
            history.push('/home')
            
        } catch (exception) {
            setMessage('Mail y/o password incorrectos.')
            console.log(user, "USER")
            setTimeout(() => {
                setMessage(null)
            }, 3000)
        }
        
    }


    return (
        <Container className="mt-5">
            <Row className='justify-content-center align-items-center'>
                
                    <Col lg={6} md={6} sm={12} className=' align-content-center'>    
                        <Card className="text-center mt-5 p-3 shadow ">
                          <Card.Title className='text-red'>¡Ingresá tus datos y armá tu equipo!</Card.Title>
                          <hr />
                         <Card.Img className='loginIcon-img' alt="Login Icon" src={loginIcon} />
                            <Form onSubmit={handleLogin}>
                                <Form.Group>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control 
                                    type="email" 
                                    placeholder="Ingresá tu email"
                                    onChange={({ target }) => setEmail(target.value)}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Ingresá tu password"
                                        onChange={({ target }) => setPassword(target.value)} 
                                    /> 
                                </Form.Group>
                                <Button variant="primary btn-block" type="submit">
                                    Enviar
                                </Button>
                            </Form>
                            { message && <Alert variant="danger">{message}</Alert>}
                        </Card>
                </Col> 

                <Col lg={6} md={6} className='d-none d-md-block pl-5'>
                    <img className='login-img mx-auto' alt='Login Page Superheroes' src={loginPageImage} />
                </Col>    
            </Row>
         </Container>
    )
}

export default Login
