import React, { Component } from 'react'
import SmartTopicsContainer from '../containers/TopicsContainer'
import '../index.css'
import AuthContainer from '../containers/AuthContainer'

class App extends Component {
  render() {
    return (
      <div className="center">
          <AuthContainer />
          <SmartTopicsContainer />
      </div>
    )
  }

}

export default App
