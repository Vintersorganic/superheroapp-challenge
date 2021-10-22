import axios from 'axios'
const baseUrl = `/api/${process.env.REACT_APP_API_USER_TOKEN}/`

const getHeroes = async value => {
  const response = await axios.get(baseUrl + 'search/' + value)
  return response.data
}

const getIndividualHero = async id => {
  const response = await axios.get(baseUrl + id)
  return response.data
}

const heroesService = { getHeroes, getIndividualHero }

export default heroesService

