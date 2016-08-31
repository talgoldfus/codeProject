import React, { Component } from 'react'
// import { Link } from 'react-router'
import UserQuestionRecord from './UserQuestionRecord'
import UserQuestionTable from './UserQuestionTable'

class UserRecentGame extends Component {

  constructor(props){
    super(props)
    this.state = {right_answers: '', wrong_answers: ''}
  }

  answerTables(){
    this.setState({right_answers: <UserQuestionTable title="Right Answers" questions={this.props.gameInfo.questions_right} />})
    this.setState({wrong_answers: <UserQuestionTable title="Wrong Answers" questions={this.props.gameInfo.questions_wrong} />})
  }


render(){


  const gameInfo = this.props.gameInfo
  const formattedDate = Date(gameInfo.date).split(" ").slice(0, 4).join(" ")

  
  return (
    <div className="gameRow">
      <tr onClick={this.answerTables.bind(this)}>
        <td className="gameRowCells">{formattedDate}</td>
        <td className="gameRowCells">{gameInfo.topic}</td>
        <td className="gameRowCells">{gameInfo.score}</td>
      </tr>
      <div>
        {this.state.right_answers}
        {this.state.wrong_answers}
      </div>
    </div>
  )
}}

export default UserRecentGame