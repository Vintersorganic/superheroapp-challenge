import React from 'react'
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import loginIcon from '../../images/login-icon2.png'
import loginPageImage from '../../images/superheroes-6.png'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/loginReducer'
import './login.css'
import { useSelector } from 'react-redux'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const message = useSelector(state => state.message)

  const handleLogin = (credentials) => {
    dispatch(login(credentials))
    history.push('/home')
  }

  const schema = yup.object().shape({
    email: yup.string().email('Formato inválido de email').required('Es necesario ingresar un email válido.'),
    password: yup.string().required('Es necesario ingresar un password.'),
  })

  return (

    <Container className="mt-5">
      <Row className='justify-content-center align-items-center'>

        <Col lg={6} md={6} sm={12} className=' align-content-center'>
          <Card className="text-center mt-5 p-3 shadow ">
            <Card.Title className='text-red'>¡Ingresá tus datos y armá tu equipo!</Card.Title>
            <hr />
            <Card.Img className='loginIcon-img' alt="Login Icon" src={loginIcon} />

            <Formik
              validationSchema={schema}
              onSubmit={handleLogin}
              initialValues={{
                email:'',
                password: ''
              }}
            >

              {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="validationFormik01" >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      value={values.email}
                      placeholder="Ingresá tu email"
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid" >{errors.email}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      placeholder="Ingresá tu password"
                      onChange={handleChange}
                      isValid={touched.password && !errors.password}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary btn-block" disabled={!isValid} type="submit">
                                        Enviar
                  </Button>
                </Form>
              )}
            </Formik>
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
