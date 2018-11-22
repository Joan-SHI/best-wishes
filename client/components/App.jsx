import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadingIndicator from './LoadingIndicator'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const App = () => (
  <div className='app'>
    {/* <Header /> */}
    <ErrorMessage />
    <LoadingIndicator />
    <Header />
    <Main />
    <Footer />
  </div>
)


export default App
