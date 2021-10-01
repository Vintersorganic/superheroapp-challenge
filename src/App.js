import React, { useEffect, useState } from 'react'
import {
  Switch, Route, useHistory
} from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import SuperheroesCard from './components/SuperheroesCard/SuperheroesCard'
import Login from './components/Login/Login'
import HeroNavbar from './components/Navbar/HeroNavbar'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import HeroTeam from './components/HeroTeam/HeroTeam'
import HeroeDetails from './components/HeroeDetails/HeroeDetails'
import Powerstats from './components/Powerstats/Powerstats'
import axios from 'axios'

function App() {
  const [superHeroes, setSuperheroes] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [teamHeroes, setTeamHeroes] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedSuperheroAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post('http://challenge-react.alkemy.org/', { email, password })
      window.localStorage.setItem(
        'loggedSuperheroAppUser', JSON.stringify(response.data.token)
      )
      setUser(response.data)
      setLoading(false)
      setEmail('')
      setPassword('')
      history.push('/home')

    } catch (exception) {
      setMessage('Mail y/o password incorrectos.')
      console.log(user, 'USER')
      setLoading(false)
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
  }


  if (user === null) {
    return (
      <Switch className='container'>
        <Route path='/'>
          {
            loading ?
              <LoadingSpinner />
              : <Login handleLogin={handleLogin}
                setMessage={setMessage}
                message={message}
                setPassword={setPassword}
                setEmail={setEmail}
                email={email}
              />
          }
        </Route>
      </Switch>
    )
  }
  else return (
    <div>
      <HeroNavbar setLoading={setLoading} user={user} setUser={setUser} setSuperheroes={setSuperheroes} message={message} setMessage={setMessage}/>

      <Switch>
        <Route path='/home'>
          <Powerstats teamHeroes={teamHeroes}></Powerstats>
          <HeroTeam teamHeroes={teamHeroes} setTeamHeroes={setTeamHeroes}/>

        </Route>
        <Route path='/heroes/:id'>
          <HeroeDetails setLoading={setLoading} loading={loading}/>
        </Route>
        <Route path='/heroes'>
          {loading ? <LoadingSpinner />
            :<SuperheroesCard setTeamHeroes={setTeamHeroes} teamHeroes={teamHeroes} superHeroes={superHeroes} message={message} setMessage={setMessage}/>}
          {message === 'error' && <Alert className="mt-5 text-center" variant="danger"> No se encontró lo que estabas buscando, probá con otra palabra.</Alert>}
        </Route>

      </Switch>

    </div>
  )

}

export default App
