import React, { Component } from 'react'
import { Link } from 'react-router'
import UserRecentGame from './UserRecentGame'

class UserPage extends Component {

  componentWillMount(){
    this.props.getInfo()
  }

render(){


  const userInfo = this.props.userInfo.user_info || {email: "", tagline: "", average_score: "", games: []}

  const games = []

  for(var game in userInfo.games){
    games.push(<UserRecentGame gameInfo={userInfo.games[game]}/>)
  }

  return (
      <div> 
        <h2>{userInfo.email}</h2>
        <h6>Tagline: {userInfo.Tagline}</h6>
        <h2>Average Score: {userInfo.average_score}</h2>
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