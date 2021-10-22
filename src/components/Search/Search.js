import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, FormControl, Button } from 'react-bootstrap'

import { Formik } from 'formik'
import * as yup from 'yup'
// import { setNotification } from '../../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { searchSuperheroes } from '../../reducers/superheroesReducer'
import { initializeEmptySuperheroes } from '../../reducers/superheroesReducer'

const Search = () => {

  const schema = yup.object().shape({
    search: yup.string()
      .required('Ingresá un caracter.')
      .matches(/^[a-zA-Z0-9-_ ]+$/, '¡Sólo podés ingresar letras, números y guión alto!'),
  })

  const history = useHistory()
  const dispatch = useDispatch()

  const handleSearch = (values) => {
    history.push('/heroes')
    dispatch(initializeEmptySuperheroes())
    dispatch(searchSuperheroes(values.search))
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
