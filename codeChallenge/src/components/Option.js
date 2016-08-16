import React, { Component } from 'react'

const Option = class extends Component {
  // constructor(props) {
  //   super(props)
  //   debugger
  //   // this.state = {score: 0}
  // }
  
  checkAnswer(e) {
    e.preventDefault()    
    if (this.props.correct === true ) {
      // let current_score = this.state.score
      // this.setState({score: current_score += this.props.difficulty})      
      alert("CORRECT")
      this.props.evaluateAnswer(this.props.correct, this.props.difficulty)
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
