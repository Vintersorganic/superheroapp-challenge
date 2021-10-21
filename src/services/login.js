import axios from 'axios'
const baseUrl = 'http://challenge-react.alkemy.org/'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  console.log(response)
  return response.data
}

const loginService = { login }

export default loginService

