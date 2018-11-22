import {
  SHOW_ERROR,
  REQUEST_MESSAGES,
  RECEIVE_MESSAGES,
  REQUEST_MESSAGE,
  RECEIVE_MESSAGE,
  SET_MESSAGE,
  SET_MESSAGE_RESULT
}
from '../actions'

const waiting = (state = false, action) => {
  switch(action.type) {
    case REQUEST_MESSAGES:
      return true

    case RECEIVE_MESSAGES:
      return false

    case REQUEST_MESSAGE:
      return true

    case RECEIVE_MESSAGE:
      return false

    case SET_MESSAGE:
      return true

    case SET_MESSAGE_RESULT:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
