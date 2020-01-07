
import { combineReducers,createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import accountReducer from './accountReducer'

const rootReducer = combineReducers({
  Account: accountReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))


export default store