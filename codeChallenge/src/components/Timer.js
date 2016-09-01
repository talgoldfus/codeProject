import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import $ from 'jquery';

const Timer = class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeLeft: 30
    }
  }

  componentDidMount() {

    this.countdown = setInterval(()=>{
       let timeLeft = this.state.timeLeft
       let boardId = this.props.boardId
       let difficulty = this.props.difficulty
       let props = this.props
        timeLeft--
        if( timeLeft === 0) {
          props.updateAnalytics(null, false, props.userId, null)
          props.evaluateAnswer(false, difficulty)
          $(".time-up").fadeIn(750, function(){
            $(".time-up").fadeOut(750);
          });
          clearInterval(this.countdown);
          browserHistory.push(`/game/${boardId}`)
        } else {
          this.setState({ timeLeft: timeLeft })
        }
      }, 1000);
    }

    componentWillUnmount(){
      clearInterval(this.countdown)
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
