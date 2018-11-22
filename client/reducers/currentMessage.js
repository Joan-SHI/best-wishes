import {
    VIEW_MESSAGE,
    EDIT_MESSAGE
}
    from '../actions'


function currentMessageReducer(state = [], action) {
    console.log("currentMessageReduceder action ", action)
    switch (action.type) {
        case VIEW_MESSAGE:
            console.log("Viewing message: state to be action.message", action.message)
            return action.message // all messages put into state
        case EDIT_MESSAGE:
            console.log("Edit Message: TODO set current message to be in edit mode ", action.message)
            return state // need to replace the specific message (if existing) or insert if new
        case CLOSE_MESSAGE:
            console.log("Close Message view: TODO set current message to be null ", action.message)
            return {} // or should this be null??
        case ARCHIVE_MESSAGE:  // or should this be a thunk?  I think so
            console.log("Archive Message: TODO set current message to be archived and dispatch to SET MESSAGE?? ", action.message)
            return state // need to replace the specific message (if existing) or insert if new
        default:
            return state
    }
}

export default currentMessageReducer()
