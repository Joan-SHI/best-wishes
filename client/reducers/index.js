import { combineReducers } from 'redux'

import errorMessage from './error-message'
import messagesReducer from './messages'
import currentMessageReducer from './currentMessage'
import loadingReducer from './loading'

export default combineReducers({
  errorMessage,
  messagesReducer,
  currentMessageReducer,
  loadingReducer
})
