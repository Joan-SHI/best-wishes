import React from 'react'
import MiniMessage from './MiniMessage'

const MessageBoard = (props) => (
  <React.Fragment>
   {const messages = props.messages
   messages.map((message, i) =>
      <MiniMessage
        key={i}
        index={i}
        id={message.id}
        title={message.title}
        summary={post.selftext}

      />
    )}
  
  <MiniMessage />

  </React.Fragment>
)

export default MessageBoard
