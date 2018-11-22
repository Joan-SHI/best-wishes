import React from 'react'
import MiniMessage from './MiniMessage'
import { connect } from 'react-redux'

const MessageBoard = (props) => (
  <React.Fragment>
    const messages = props.messages
   messages.map((message, i) => <MiniMessage key={i} index={i} message={message} />)
  </React.Fragment>
)



function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessageBoard)
