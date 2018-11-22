import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  SET_MESSAGE_RESULT
}
from '../actions'


function messagesReducer(state = [], action) {
  console.log("messagesReduceder action ", action)
  switch(action.type) {
    case RECEIVE_MESSAGES:
      console.log("Messages received: state to be action.messages", action.messages)
      return action.messages // all messages put into state
    case RECEIVE_MESSAGE:
      console.log("Message received: TODO update message and return all messages", action.message)
      return state // need to replace the specific message (if existing) or insert if new
    case SET_MESSAGE_RESULT:
      console.log("Set message result received: TODO update existing or insert new, and return all messages", action.result)
      return state // need to replace the specific message (if existing) or insert if new

    default:
      return state
  }
}

export default messagesReducer()
