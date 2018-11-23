import React from 'react'
import { viewMessageActionCreator } from '../actions'
import { connect } from 'react-redux'

const MiniMessage = (props) => {
  const message = props.message
  return (
    <div id={`message-${message.id}`} onClick={() => props.dispatch(viewMessageActionCreator(message))} className="miniMessage" >
      <h4>I'm a mini message</h4>
      <p>To: {message.to || "No To!!"}  </p>
      <p>Message: {message.title}</p>
    </div>
  )
}


export default connect()(MiniMessage)