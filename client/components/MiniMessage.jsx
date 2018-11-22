import React from 'react'

const MiniMessage = (props) => (
  <React.Fragment>
    <div>{props.title}</div>
    <p>ID: {props.id}</p>
    <p>To: TODO </p>
    <p>MESSAGE: {props.body} </p>
  </React.Fragment>
)

export default MiniMessage
