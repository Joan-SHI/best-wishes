import React from "react";
import MiniMessage from "./MiniMessage";
import { connect } from "react-redux";
import { fetchMessagesThunk } from "../actions";

const MessageBoard = props => {
  return (
    <React.Fragment>
      {props.messages.filter((message, i) => i < 20).map((message, i) => {
        return <MiniMessage key={i} index={i} message={message} />;
      })}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageBoard);
