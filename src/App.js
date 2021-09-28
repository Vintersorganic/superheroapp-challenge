import React, { useEffect, useState } from "react";
import axios from 'axios'
import {
  Switch, Route, useHistory
} from "react-router-dom"
import SuperheroesCard from "./components/SuperheroesCard/SuperheroesCard"
import Login from "./components/Login/Login";
import HeroNavbar from "./components/Navbar/HeroNavbar"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const [superHeroes, setSuperheroes] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  let history = useHistory()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedSuperheroAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleSearch = (value) => {
    setLoading(true)
    axios
          .get(`/api/10158026026342484/search/${value}`)
          .then(response => {
            setSuperheroes(response.data.results)
            setLoading(false)         
          })
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
    
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://challenge-react.alkemy.org/', {email, password})
            window.localStorage.setItem(
                'loggedSuperheroAppUser', JSON.stringify(response.data.token)
              ) 
            setUser(response.data)
            setEmail('')
            setPassword('')
            history.push('/home')
            
        } catch (exception) {
            setMessage('Mail y/o password incorrectos.')
            console.log(user, "USER")
            setTimeout(() => {
                setMessage(null)
            }, 3000)
        }     
    }

    if (user === null) {
      return (
      <Switch className='container'>
        <Route path='/'>
            <Login handleLogin={handleLogin} setEmail={setEmail} setPassword={setPassword} message={message}/>
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
