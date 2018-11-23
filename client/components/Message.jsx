import React from 'react'
import { connect } from 'react-redux'
import { setMessageActionCreator, setMessageThunk } from '../actions'


// will be for view and for like and for archive and for edit (based on local state of current message)
class Message extends React.Component {
  constructor(props) {
    super(props)

    // set initial state of null/fake message
    this.state = {
      editMode: false
    }
    // bind any functions
  }

  render() {
    // depending on state, return the standard view (with like and delete and edit button) or edit/create view
    const message = this.props.currentMessage || this.state.currentMessage
    console.log("Message component: current message? ", message)

    if (this.props.currentMessage) {
      if (this.state.editMode) {
        return (
          <React.Fragment>
            <div>{message}</div>
          </React.Fragment>
        )
      }
      else {
        return (
          <React.Fragment>
            <h3>I'm a message view</h3>
            <h3>To: {message && message.to || message.id || "No to"}</h3>
            <p>MESSAGE: {message && message.message || message.title || "no message"} </p>
            <p>Likes: {message && message.like_count || "no like count"} </p>
            {/* <p>EDIT | ARCHIVE | LIKE</p> */}

            <span>color</span><input type="color" value={message.color || '#ffffff'} onChange={e => {
              message.color = e.target.value
              this.props.dispatch(setMessageThunk(message))
            }} />


            <button onClick={(e) => {
              // add one to likes
              message.like_count = 99//+= 1 || 1
              this.props.dispatch(setMessageThunk(message))
            }}>like</button>

          </React.Fragment>
        )
      }
    } else {
      return <React.Fragment />
    }

  }
}

function mapStateToProps(state) {
  return {
    currentMessage: state.currentMessage
  }
}

export default connect(mapStateToProps)(Message)
