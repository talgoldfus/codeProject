import React, { Component } from 'react'

class CurrentQuestion extends Component {
  componentWillMount() {
    debugger
    this.props.getOptions(id)
  }
  render(){
    return (
      <ul>
      </ul>
    )
  }
}

export default CurrentQuestion
