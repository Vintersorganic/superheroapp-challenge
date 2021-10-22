import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import loginReducer from './reducers/loginReducer'
import loadingReducer from './reducers/loadingReducer'
import superHeroesReducer from './reducers/superheroesReducer'
import heroteamReducer from './reducers/heroteamReducer'

const reducer = combineReducers({
  user: loginReducer,
  message: notificationReducer,
  loading: loadingReducer,
  superheroes: superHeroesReducer,
  teamheroes: heroteamReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
