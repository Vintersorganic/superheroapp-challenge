import axios from 'axios'
const baseUrl = '/api/10158026026342484/'

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

