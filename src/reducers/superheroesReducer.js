import heroesService from '../services/heroes'
import { setNotification } from './notificationReducer'
import { setLoadingTrue, setLoadingFalse } from './loadingReducer'

const superHeroes = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_SUPERHEROES':
    return [...state, ...action.data]
  case 'SUPERHERO_DETAIL':
    return action.data
  case 'EMPTY_SUPERHEROES':
    return action.data
  default:
    return state
  }
}

export const searchSuperheroes = (value) => {
  return async dispatch => {
    try {
      dispatch(setLoadingTrue())
      const superheroes = await heroesService.getHeroes(value)
      dispatch(setNotification(superheroes.response, 4))
      dispatch({
        type: 'SEARCH_SUPERHEROES',
        data: superheroes.results
      })
      dispatch(setLoadingFalse())
    } catch (e) {
      dispatch(setLoadingFalse())
      console.log('Error | ', e)
    }
  }
}

export const initializeEmptySuperheroes = () => {
  return {
    type: 'EMPTY_SUPERHEROES',
    data: []
  }
}

export const superheroDetail = (id) => {
  return async dispatch => {
    try {
      dispatch(setLoadingTrue())
      const superhero = await heroesService.getIndividualHero(id)
      dispatch({
        type: 'SUPERHERO_DETAIL',
        data: superhero
      })
      dispatch(setLoadingFalse())
    } catch (e) {
      console.log('Error | ', e)
    }
  }
}

export default superHeroes
