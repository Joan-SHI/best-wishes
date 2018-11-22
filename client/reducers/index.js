import { combineReducers } from 'redux'

import errorMessage from './error-message'
import messagesReducer from './messages'
import currentMessageReducer from './currentMessage'
import waiting from './waiting'
import newPosts from './newPosts'

export default combineReducers({
  errorMessage,
  messagesReducer,
  currentMessageReducer,
  waiting,
})
