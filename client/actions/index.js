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

export const requestMessagesActionCreator = () => {
  return {
    type: REQUEST_MESSAGES
  }
}

export const receiveMessagesActionCreator = (messages) => {
  console.log("Creating RECEIVE_MESSAGES action, with messages: ", messages)
  return {
    type: RECEIVE_MESSAGES,
    messages: messages
  }
}

export const requestMessageActionCreator = () => {
  return {
    type: REQUEST_MESSAGE
  }
}

export const receiveMessageActionCreator = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message: message.data
  }
}

export const viewMessageActionCreator = (message) => {
  console.log("view message action : message: ", message)
  return {
    type: VIEW_MESSAGE,
    message: message
  }
}

export const editMessageActionCreator = (message) => {
  return {
    type: EDIT_MESSAGE,
    message: message
  }
}

export const setMessageActionCreator = (message) => {
  return {
    type: SET_MESSAGE,
    message: message
  }
}

export const setMessageResultActionCreator = (result) => {
  return {
    type: SET_MESSAGE_RESULT,
    result: result
  }
}

export const showErrorActionCreator = (errorMessage) => {
  // console.log("error??", errorMessage)
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}




// Thunks!!

export function fetchMessagesThunk() {
  return (dispatch) => {
    console.log("Fetch messages thunk:")
    dispatch(requestMessagesActionCreator()) // tells the waiting spinner to be true
    return request
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.body)
      .then(messages => {
        console.log("Fetch messages thunk response body (messages): ", messages)
        dispatch(receiveMessagesActionCreator(messages))
      })
      .catch(err => {
        console.log("error", err)
        dispatch(showErrorActionCreator(err.message))
      })
  }
}

export function fetchMessageThunk(id) {
  return (dispatch) => {
    dispatch(requestMessagesActionCreator()) // tells the waiting spinner to be true
    return request // superagent api-client
      // .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .get(`https://jsonplaceholder.typicode.com/posts/id`)
      .then(res => res.body)
      // .then(messages => messages.find(message => message.id == id)) // this to fake api getting single message
      .then(message => dispatch(receiveMessageActionCreator(message)))
      .catch(err => {
        console.log("error getting message", err)
        dispatch(showErrorActionCreator(err.message))
      })
  }
}

// for create, update and archive
export function setMessageThunk(message) {
  console.log("setMessageThunk - message: ", message)
  return (dispatch) => {
    dispatch(setMessageActionCreator(message)) // tells the waiting spinner to be true // don't think need message to be sent
    if (message.id) {
      // update existing message with PUT  (for update and archive)
      return request // superagent api-client
        .put(`https://jsonplaceholder.typicode.com/posts/${message.id}`)
        .send(message)
        .then(res => res.body)
        // .then(messages => messages.find(message => message.id == id)) // this to fake api getting single message
        .then(result => {
          console.log("setMessage result from setMessage: ", result)
          dispatch(setMessageResultActionCreator(result))
        })
        .catch(err => {
          console.log("error updating message ", message.id, ". Error: ", err)
          dispatch(showErrorActionCreator(err.message))
        })
    } else {
      // create new message with POST
      return request // superagent api-client
        .post(`https://jsonplaceholder.typicode.com/posts/`)
        .send(message)
        .then(res => res.body)
        // .then(messages => messages.find(message => message.id == id)) // this to fake api getting single message
        .then(result => {
          console.log("setMessage result from setMessage: ", result)
          dispatch(setMessageResultActionCreator(result))
        })
        .catch(err => {
          console.log("error creating new message", err)
          dispatch(showErrorActionCreator(err.message))
        })
    }
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
