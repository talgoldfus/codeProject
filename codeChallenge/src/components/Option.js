import React, { Component } from 'react'
import { Link } from 'react-router'
import $ from 'jquery'; 
import CurrentQuestion from '../components/CurrentQuestion'

const Option = class extends Component {
  handleClick(){
    //This is a quick fix, we should use state for this
    if (this.props.correct == true) {
      $(".correct").fadeIn(750, function(){
        $(".correct").fadeOut(750);
      });
    } else {
      $(".incorrect").fadeIn(750, function(){
        $(".incorrect").fadeOut(750);
      });
    }
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
