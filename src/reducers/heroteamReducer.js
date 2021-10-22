

const heroteamReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_HERO':
    return state.concat(action.data)
  case 'DELETE_HERO':
    return state.filter(hero => hero.id !== action.data)
  default:
    return state
  }
}

export const addHero = hero => {
  return async dispatch => {
    dispatch({
      type: 'ADD_HERO',
      data: hero
    })
  }
}

export const deleteHero = id => {
  return async dispatch => {
    dispatch({
      type: 'DELETE_HERO',
      data: id
    })
  }
}

export default heroteamReducer
