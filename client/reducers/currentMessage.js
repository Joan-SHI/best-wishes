import {
    VIEW_MESSAGE,
    EDIT_MESSAGE
}
from '../actions'


function currentMessageReducer(state = [], action) {
    console.log("currentMessageReduceder action ", action)
    switch(action.type) {
        case VIEW_MESSAGE:
            console.log("Viewing message: state to be action.message", action.message)
            return action.messages // all messages put into state
        case EDIT_MESSAGE:
            console.log("Edit Message: TODO set current message to be in edit mode ", action.message)
            return state // need to replace the specific message (if existing) or insert if new
        default:
            return state
    }
}

export default currentMessageReducer()
