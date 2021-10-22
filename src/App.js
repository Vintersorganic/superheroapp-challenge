import React, { useEffect } from 'react'
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
import HeroDetails from './components/HeroeDetails/HeroDetails'
import Powerstats from './components/Powerstats/Powerstats'
import { initializeUser } from './reducers/loginReducer'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const loading = useSelector(state => state.loading)
  const message = useSelector(state => state.message)

  useEffect(() => {
    dispatch(initializeUser())
  }, [dispatch])

  if (user === null) {
    return (
      <Switch className='container'>
        <Route path='/'>
          {
            loading ?
              <LoadingSpinner />
              : <Login
              />
          }
        </Route>
      </Switch>
    )
  }
  else return (
    <div>
      <HeroNavbar />

      <Switch>
        <Route path='/home'>
          <Powerstats />
          <HeroTeam />
        </Route>
        <Route path='/heroes/:id'>
          <HeroDetails />
        </Route>
        <Route path='/heroes'>
          {loading ? <LoadingSpinner />
            :<SuperheroesCard/>}
          {message === 'error' && <Alert className="mt-5 text-center" variant="danger"> No se encontró lo que estabas buscando, probá con otro nombre.</Alert>}
        </Route>
      </Switch>

    </div>
  )

}

export default App
