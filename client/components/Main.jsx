import React from 'react'
import MessageBoard from './MessageBoard'
import Message from './Message'

const Main = (props) => (
  <React.Fragment>
    <MessageBoard />
    <Message />  {/* this will show only if there is a current message in the store*/}
  </React.Fragment>
)

export default Main
