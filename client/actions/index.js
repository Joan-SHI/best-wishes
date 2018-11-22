import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
// get all messages
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'

// get single message
export const REQUEST_MESSAGE = 'REQUEST_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

// view a message (set current message)
export const VIEW_MESSAGE = 'VIEW_MESSAGE'

// edit a message (set current message to be in edit mode)
export const EDIT_MESSAGE = 'EDIT_MESSAGE'

// create new message or update existing message
export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_MESSAGE_RESULT = 'SET_MESSAGE_RESULT'


// STANDARD_ACTIONS

export const requestMessages = () => {
  return {
    type: REQUEST_MESSAGES
  }
}

export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages: messages.map(message => message.data)
  }
}

export const requestMessage = () => {
  return {
    type: REQUEST_MESSAGE
  }
}

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message: message.data
  }
}

export const viewMessage = (message) => {
  return {
    type: VIEW_MESSAGE,
    message: message
  }
}

export const editMessage = (message) => {
  return {
    type: EDIT_MESSAGE,
    message: message
  }
}


export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    message: message
  }
}

export const setMessageResult = (result) => {
  return {
    type: SET_MESSAGE_RESULT,
    result: result
  }
}

export const showError = (errorMessage) => {
  // console.log("error??", errorMessage)
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}




// Thunks!!

export function fetchMessages() {
  return(dispatch) => {
    dispatch(requestMessages()) // tells the waiting spinner to be true
    return request
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        dispatch(receiveMessages(res.body))
      })
      .catch(err => {
        console.log("error", err)
        dispatch(showError(err.message))
      })
  }
}

export function fetchMessage(id) {
  return(dispatch) => {
    dispatch(requestMessages()) // tells the waiting spinner to be true
    return request // superagent api-client
      // .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .get(`https://jsonplaceholder.typicode.com/posts/id`)
      .then(res => res.body)
      // .then(messages => messages.find(message => message.id == id)) // this to fake api getting single message
      .then(message => dispatch(receiveMessage(message)))
      .catch(err => {
        console.log("error getting message", err)
        dispatch(showError(err.message))
      })
  }
}


// TODO POST AND PUT thunks
// export function setMessage(message) {
//   return(dispatch) => {
//     dispatch(setMessage(message)) // tells the waiting spinner to be true
//     return request // superagent api-client
//     // fake api doing a put or post and getting a result (success + new/updated message, or error)
//       .get(`https://jsonplaceholder.typicode.com/posts`)
//       .then(res => res.body)
//       .then(messages => messages.find(message => message.id == id)) // this to fake api getting single message
//       .then(message => dispatch(receiveMessage(message)))
//       .catch(err => {
//         console.log("error getting message", err)
//         dispatch(showError(err.message))
//       })
//   }
// }
