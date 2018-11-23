import React from "react";

import ErrorMessage from "./ErrorMessage";
import LoadingIndicator from "./LoadingIndicator";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const App = () => (
  <div className="app">
    <Header />
    <ErrorMessage />
    <LoadingIndicator />
    <Main />
    <Footer />
  </div>
);

// const App = () => (
//   <div className='app'>
//   <p>Hello Joan</p>
//   </div>
// )

export default App;
