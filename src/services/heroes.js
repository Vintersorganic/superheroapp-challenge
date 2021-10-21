import axios from 'axios'
const baseUrl = `/api/${process.env.REACT_APP_API_USER_TOKEN}/`

const getHeroes = async value => {
  console.log(baseUrl + '' + value, 'PROBANDO')
  const response = await axios.get(baseUrl + 'search/' + value)
  console.log(response)
  return response.data
}

const getIndividualHeroe = async id => {
  const response = await axios.get(baseUrl + id)
  return response.data
}

const heroesService = { getHeroes, getIndividualHeroe }

export default heroesService

