import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import $ from 'jquery';
import CurrentQuestion from '../components/CurrentQuestion'

const Timer = class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeLeft: 30
    }
  }

  componentDidMount() {
    var countdown = setInterval(()=>{
       let timeLeft = this.state.timeLeft
       let questionId = this.props.questionId
       let boardId = this.props.boardId
       let difficulty = this.props.difficulty
       let props = this.props
        timeLeft--
        if( timeLeft == 0) {
          props.updateAnalytics(null, false, props.userId, null)
          props.evaluateAnswer(false, props.difficulty)
          $(".time-up").fadeIn(750, function(){
            $(".time-up").fadeOut(750);
          });
          clearInterval(countdown);
          browserHistory.push(`/game/${boardId}`)
        } else {
          this.setState({ timeLeft: timeLeft })       
        }
      }, 1000);
    }


  render(){

    return(
      <div className="question-timer">
        {this.state.timeLeft}
      </div>
    )
  }
}

export default Timer
