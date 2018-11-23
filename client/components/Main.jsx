import React from 'react'
import MessageBoard from './MessageBoard'
import Message from './Message'

const Main = (props) => {
  return(
    <React.Fragment>
      <MessageBoard />
    {
    true && <Message /> 
      
    }
      
          
  </React.Fragment>
  )
}

export default Main
