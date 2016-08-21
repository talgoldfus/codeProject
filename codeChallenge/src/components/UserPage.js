import React, { Component } from 'react'
import { Link } from 'react-router'
import UserRecentGame from './UserRecentGame'
import UserQuestionRecord from './UserQuestionRecord'

class UserPage extends Component {

  componentWillMount(){
    this.props.getInfo()
  }

render(){


  const userInfo = this.props.userInfo.user_info || {email: "", tagline: "", average_score: "", games: [], questions_right: [], questions_wrong: []}

  const games = []
  for(var game in userInfo.games){
    games.push(<UserRecentGame gameInfo={userInfo.games[game]}/>)
  }

  const rightAnswers = []
  for(var question in userInfo.questions_right){
    rightAnswers.push(<UserQuestionRecord questionInfo={userInfo.questions_right[question]}/>)
  }

  const wrongAnswers = []
  for(var question in userInfo.questions_wrong){
    wrongAnswers.push(<UserQuestionRecord questionInfo={userInfo.questions_wrong[question]}/>)
  }

  return (
      <div> 
        <h2>{userInfo.email}</h2>
        <h6>Tagline: {userInfo.Tagline}</h6>
        <h2>Average Score: {userInfo.average_score}</h2>
        
        <br></br><h3>RECENT GAMES </h3><br></br>
          <table>
            <thead>
              <th>Date</th>
              <th>Topic</th>
              <th>Score</th>
            </thead>
            <tbody>
              {games}
            </tbody>
          </table>
      </div>
  )
}}

export default UserPage