import React from "react";

import ErrorMessage from "./ErrorMessage";
import LoadingIndicator from "./LoadingIndicator";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import MiniMessage from "./MiniMessage";
import MessageBoard from "./MessageBoard";
import {fetchMessagesThunk} from "../actions";
import {connect} from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMessagesThunk())
  }
  render() {
    return (
      <div id="background">
        <div id="mainBoard" class="board">
          <div class="header">
            <h1>Best Wishes for Hihi 2018 Cohort of EDA 2018</h1>
          </div>
          <div class="column1">
            <MessageBoard />
          </div>
          <div class="column2">
            <div class="createMessage">
              <form>
                <p class="titleInteractivePanels">Create message</p>
                <p>
                  To: <input />
                </p>
                <p>
                  From: <input />
                </p>
                <p>
                  Body: <input />
                </p>
                <p>
                  Colour:
                  <input type="color" value="#FFFFFF" />
                </p>
                <p class="buttons">
                  <button>Cancel</button>
                  <button>Submit</button>
                </p>
              </form>
            </div>
            <div class="readMessage">
              <p class="titleInteractivePanels">Create message</p>
              <p>
                To: <input class="toInput" />
              </p>
              <p>
                From: <input class="fromInput" />
              </p>
              <p>
                Body: <input class="bodyInput" />
                <p class="buttons">&#x1F49F; &#x270D; &#x274C;</p>
              </p>
            </div>
          </div>
          <div class="footer">
            <h2>Cathy Pete Joan Ollie</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App)
{
  /* <Header />
    <ErrorMessage />
    <LoadingIndicator />
    <Main />
    <Footer /> */
}
