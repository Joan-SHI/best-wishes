import React from 'react'
import { connect } from 'react-redux'


// will be for view and for like and for archive and for edit (based on local state of current message)
class Message extends React.Component {
  constructor(props) {
    super(props)

    // set initial state of null/fake message
    this.state = {
      currentMessage: {
        id: 0,
        to: "Santa",
        from: "mini-me",
        message: "You should never see this message",
        color: "#FFFFFF",
        like_count: 999,
        archived: false,
        created_at: null
      },
      editMode: false
    }
    // bind any functions
  }

  render() {
    // depending on state, return the standard view (with like and delete and edit button) or edit/create view
    message = this.props.currentMessage || this.state.currentMessage
    if (this.state.editMode) {
      return (
        <React.Fragment>
          <div>{message}</div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div>{message.title}</div>
          <p>To: {message.to} </p>
          <p>MESSAGE: {message.message} </p>
          <p>Likes: {message.like_count} </p>
          <p>EDIT | ARCHIVE | LIKE</p>
        </React.Fragment>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    currentMessage: state.currentMessage
  }
}

export default connect(mapStateToProps)(Message)
