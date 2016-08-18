import React, { Component } from 'react'
import SmartTopicsContainer from '../containers/TopicsContainer'
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