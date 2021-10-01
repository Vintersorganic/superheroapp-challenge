import React from 'react'
import { Button } from 'react-bootstrap'

const LogoutButton = ( { setUser }) => {
  return (

    <Button onClick={() => {
      window.localStorage.removeItem('loggedSuperheroAppUser')
      setUser(null)
    }}>
             Desconectarse
    </Button>

  )
}

export default LogoutButton
