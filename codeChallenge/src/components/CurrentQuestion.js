import React, { Component } from 'react'

class CurrentQuestion extends Component {
  componentWillMount() {
    debugger
    this.props.getOptions()
  }
  render(){
    return (
      <ul>
      </ul>
    )
  }
}

export default CurrentQuestion
