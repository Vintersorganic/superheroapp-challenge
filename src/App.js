import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Switch, Route
} from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import SuperheroesCard from './components/SuperheroesCard/SuperheroesCard'
import Login from './components/Login/Login'
import HeroNavbar from './components/Navbar/HeroNavbar'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import HeroTeam from './components/HeroTeam/HeroTeam'
import HeroeDetails from './components/HeroeDetails/HeroeDetails'
import Powerstats from './components/Powerstats/Powerstats'
import { initializeUser } from './reducers/loginReducer'

function App() {
  const [superHeroes, setSuperheroes] = useState([])
  const [loading, setLoading] = useState(false)
  const [e, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [teamHeroes, setTeamHeroes] = useState([])
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(initializeUser())
  }, [dispatch])

  // const handleLogin = async (credentials) => {
  //   try {
  //     setLoading(true)
  //     const user = await loginService.login(credentials)
  //     window.localStorage.setItem(
  //       'loggedSuperheroAppUser', JSON.stringify(user.token)
  //     )
  //     setUser(user)
  //     setLoading(false)
  //     history.push('/home')

  //   } catch (exception) {
  //     setMessage('Mail y/o password incorrectos.')
  //     setLoading(false)
  //     setTimeout(() => {
  //       setMessage(null)
  //     }, 3000)
  //   }
  // }
  console.log(e)

  if (user === null) {
    return (
      <Switch className='container'>
        <Route path='/'>
          {
            loading ?
              <LoadingSpinner />
              : <Login
                setMessage={setMessage}
                message={message}
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
