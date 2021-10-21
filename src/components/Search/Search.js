import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, FormControl, Button } from 'react-bootstrap'
import heroesService from '../../services/heroes'
import { Formik } from 'formik'
import * as yup from 'yup'

const Search = ( { setSuperheroes, setLoading, setMessage }) => {

  const schema = yup.object().shape({
    search: yup.string()
      .required('Ingresá un caracter.')
      .matches(/^[a-zA-Z0-9-_ ]+$/, '¡Sólo podés ingresar letras, números y guión alto!'),
  })

  const history = useHistory()

  const handleSearch = (values) => {
    history.push('/heroes')
    setLoading(true)
    heroesService
      .getHeroes(values.search)
      .then(data => {
        console.log(data)
        setSuperheroes(data.results)
        setLoading(false)
        setMessage(data.response)
        setTimeout(() => {
          setMessage(null)
        }, 4000)
      })
      .catch(error => {
        console.log('Error | ', error)
      })
  }

  return (
    <div>
      <Formik  validationSchema={schema}
        onSubmit={handleSearch}
        initialValues={{
          search:'',
        }}>
        {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
          <Form  className="d-flex" onSubmit={handleSubmit}>

            <FormControl
              type="text"
              name="search"
              value={values.search}
              placeholder="Buscar"
              onChange={handleChange}
              isValid={touched.search && !errors.search}
              isInvalid={!!errors.search}
              className="mr-2"
            />
            <Button type="submit" variant='outline-light' disabled={!isValid}>Buscar</Button>
            <small className="ml-3 text-center text-white" >{errors.search}</small>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Search
