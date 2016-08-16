import React, { Component } from 'react'

const Option = class extends Component {
  
  checkAnswer(e) {
    e.preventDefault()
    if (this.props.correct === true ) {
      alert("CORRECT")
      this.props.evaluateAnswer(this.props.correct)
    } else {
      alert("FALSE")
    }
  }

  render(){
    return (
      <div ref={this.props.correct}>
        <li>
          <a href="#" onClick={this.checkAnswer.bind(this)}>
            {this.props.content}
          </a>
        </li>
      </div>
    )
  }
}

export default Option
