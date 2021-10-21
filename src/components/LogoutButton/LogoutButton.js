import React from 'react'
import { Button } from 'react-bootstrap'
import { logout } from '../../reducers/loginReducer'
import { useDispatch } from 'react-redux'


const LogoutButton = ( { setUser }) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    setUser(null)
  }
  return (

    <Button onClick={handleLogout}>
             Desconectarse
    </Button>

  )
}

export default LogoutButton
