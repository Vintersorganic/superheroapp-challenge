
const loadingReducer = (state = false, action) => {
  switch (action.type) {
  case 'SET_LOADING_TRUE':
    return action.data
  case 'SET_LOADING_FALSE':
    return action.data
  default:
    return state
  }
}

export const setLoadingTrue = () => {
  return async dispatch => {
    dispatch({
      type: 'SET_LOADING_TRUE',
      data: true
    })
  }
}

export const setLoadingFalse = () => {
  return async dispatch => {
    dispatch({
      type: 'SET_LOADING_FALSE',
      data: false
    })
  }
}

export default loadingReducer
