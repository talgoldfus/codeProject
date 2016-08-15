import React, { Component } from 'react'

class CurrentQuestion extends Component {
  componentWillMount() {    
    debugger
    this.props.getOptions(this.props.params.questionId)
  }
  render(){
    return (
      <ul>
        {this.props.location.search}
      </ul>
    )
  }
}

export default CurrentQuestion
