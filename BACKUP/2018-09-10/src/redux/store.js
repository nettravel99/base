import { createStore, applyMiddleware, compose } from 'redux'
import  combineReducers  from './reducers'
import logger from 'redux-logger'

const initialState = {}



const enhancers = []
const middleware = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware),   ...enhancers)

const store = createStore(combineReducers, initialState, composedEnhancers)

export default store
