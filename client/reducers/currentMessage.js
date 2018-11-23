import {
    VIEW_MESSAGE,
    EDIT_MESSAGE
}
    from '../actions'


function currentMessageReducer(state = null, action) {
    // console.log("currentMessageReduceder action ", action)
    if (action) {
        switch (action.type) {
            case VIEW_MESSAGE:
                console.log("Current Message reducer: VIEW_MESSAGE: state to be action.message", action.message)
                return action.message // this message put into state. currentMessage
            case EDIT_MESSAGE:
                console.log("Edit Message: TODO set current message to be in edit mode ", action.message)
                return state // need to replace the specific message (if existing) or insert if new
            // case CLOSE_MESSAGE:
            //     console.log("Close Message view: TODO set current message to be null ", action.message)
            //     return {} // or should this be null??
            // case ARCHIVE_MESSAGE:  // or should this be a thunk?  I think so
            //     console.log("Archive Message: TODO set current message to be archived and dispatch to SET MESSAGE?? ", action.message)
            //     return state // need to replace the specific message (if existing) or insert if new
            default:
                return state
        }
    }
    else {
        return state
    }
}

export default currentMessageReducer
