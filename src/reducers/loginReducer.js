import loginService from '../services/login'
import { setNotification } from './notificationReducer'
import { setLoadingFalse, setLoadingTrue } from './loadingReducer'

const loginReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.data
  case 'INIT_USER':
    return action.data
  case 'LOGOUT_USER':
    return action.data
  default:
    return state
  }
}

export const login = (credentials) => {
  return async dispatch => {
    try {
      dispatch(setLoadingTrue())
      const user = await loginService.login(credentials)
      window.localStorage.setItem(
        'loggedSuperheroAppUser', JSON.stringify(user.token)
      )
      dispatch({
        type: 'SET_USER',
        data: user
      })
    } catch (e) {
      dispatch(setNotification('Mail y/o password incorrectos.', 3))
    }
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch(setLoadingFalse())
    window.localStorage.removeItem('loggedSuperheroAppUser')
    dispatch({
      type: 'LOGOUT_USER',
      data: null
    })
  }
}

export const initializeUser = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem('loggedSuperheroAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch({
        type: 'INIT_USER',
        data: user
      })
    }
  }
}

export default loginReducer