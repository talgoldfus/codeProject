import React, { Component } from 'react'

const ScoreBoard = class extends Component {
  constructor(props){
    super(props)
    this.analizeAnalytics.bind(this)
    this.successRate.bind(this)
  }

successRate(){
  let correctAnswers  = this.analizeAnalytics("correct")
  let rate = (correctAnswers / this.props.gameAnalytics.options.length).toFixed(2)
  if (rate !== "NaN"){
    debugger
   return 100*rate }
   return 0
  }

  analizeAnalytics(type){
  let analytics =this.props.gameAnalytics.options.filter((option)=>{
    if (type==="correct"){
      return option.correct
    }
    return !option.correct
  }).length

  return analytics
  }

  render(){
     let Score = 0
     if (this.props.gameBoard.players){
        Score = this.props.gameBoard.players[0].score}

    return (
      <div>
        <div>
          <h2>Score:{Score}</h2>
        </div>
        <div>
          <h2>Analytics:</h2>
            <div>
              <h4> Correct Answers: {this.analizeAnalytics("correct")} </h4>
              <h4> Wrong Answers: {this.analizeAnalytics("wrong")} </h4>
              <h4> Success Rate: {this.successRate()}% </h4>
           </div>
        </div>
      </div>
    )
  }
}

export default ScoreBoard
