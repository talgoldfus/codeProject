import React, { Component } from 'react'
import { Link } from 'react-router'

const Option = class extends Component {
  // constructor(props) {
  //   super(props)
  //   debugger
  //   // this.state = {score: 0}
  // }

  render(){
    return (
      <div ref={this.props.correct}>
        <li>
          <Link to={`/game/${this.props.boardId}`} onClick={()=>{this.props.evaluateAnswer(this.props.correct,this.props.difficulty)}}>
            {this.props.content}
          </Link>
        </li>
      </div>
    )
  }
}

export default Option
