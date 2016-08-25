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
        <div className="score">
          <h1>Score:{Score}</h1>
        </div>
        <div className="scoreboard">
          <h5> Correct Answers: {this.analizeAnalytics("correct")} </h5>
          <h5> Wrong Answers: {this.analizeAnalytics("wrong")} </h5>
          <h5> Success Rate: {this.successRate()}% </h5>
        </div>
      </div>
    )
  }
}

export default ScoreBoard
