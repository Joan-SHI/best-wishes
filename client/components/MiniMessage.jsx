import React from 'react'

const MiniMessage = (props) => {
  const message = props.message
  return(
    <React.Fragment>
    <h4>I'm a mini message</h4>
      <p> ID: { message.id }</p>
      <p>To: {message.to}  </p>
    </React.Fragment >
  )
}


export default MiniMessage
