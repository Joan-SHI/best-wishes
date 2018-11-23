import React from 'react'
import MiniMessage from './MiniMessage'
import { connect } from 'react-redux'
import { fetchMessagesThunk } from '../actions'

const MessageBoard = (props) => {
  const messages = props.messages || [{ id: 0, to: "mrs claus" }, { id: 1, to: "Joan", message: "thanks for coffee, lunch" }]


  return (
    <React.Fragment>
      <h3>Message Board</h3>
      <button onClick={() => props.dispatch(fetchMessagesThunk())}>
        Fetch Messages
    </button>

      {messages.map((message, i) => {
        console.log("Message board map loop: i, message: ", i, message)
        return (<MiniMessage key={i} index={i} message={message} />)
      })

      }

    </React.Fragment>
  )
}


function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessageBoard)
