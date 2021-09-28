import React, { useEffect, useState } from "react";
import axios from 'axios'
import {
  Switch, Route
} from "react-router-dom"
import SuperheroesCard from "./components/SuperheroesCard/SuperheroesCard"
import Login from "./components/Login/Login";
import HeroNavbar from "./components/Navbar/HeroNavbar"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const [superHeroes, setSuperheroes] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (value) => {
    setLoading(true)
    axios
          .get(`/api/10158026026342484/search/${value}`)
          .then(response => {
            setSuperheroes(response.data.results)
            setLoading(false)         
          })
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedSuperheroAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])
  

    if (user === null) {
      return (
      <Switch className='container'>
        <Route path='/'>
            <Login user={user} setUser={setUser}/>
        </Route>
      </Switch> 
        );
    }
    else return (
      <div className="container">
      <HeroNavbar handleSearch={handleSearch} setUser={setUser}/>    

        <Switch>
            <Route path='/home'>
              <div>
                <p>HOLAAA</p>
              </div>
            </Route>
            <Route path='/heroes'>
              {loading ? <LoadingSpinner /> : <SuperheroesCard superHeroes={superHeroes}/>}
            </Route>
          </Switch>
      </div>
    )
  
}

export default App;
