import React, { Component } from 'react'
import { Link } from 'react-router'

const Option = class extends Component {
  handleClick(){
    this.props.updateAnalytics(this.props.id, this.props.correct, this.props.userId, null)
    this.props.evaluateAnswer(this.props.correct,this.props.difficulty)
  }

  render(){
    return (
      <div ref={this.props.correct}>
        <li>
          <Link to={`/game/${this.props.boardId}`} onClick={this.handleClick.bind(this)}>
            {this.props.content}
          </Link>
        </li>
      </div>
    )
  }
}

export default Option
