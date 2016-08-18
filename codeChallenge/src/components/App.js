import React, { Component } from 'react'
import SmartTopicsContainer from '../containers/TopicsContainer'
import '../index.css'
import AuthContainer from '../containers/AuthContainer'
import SignupHeader from '../components/SignupHeader'


class App extends Component {
  render() {
    return (
      <div className="center">
          <SignupHeader />
      </div>
    )
  }

}

export default App
