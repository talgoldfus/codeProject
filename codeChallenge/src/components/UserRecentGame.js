import React, { Component } from 'react'
import { Link } from 'react-router'

class UserRecentGame extends Component {

render(){

  const gameInfo = this.props.gameInfo
  const formattedDate = Date(gameInfo.date).split(" ").slice(0, 4).join(" ")
  
  return (
      <tr>
        <td>{formattedDate}</td>
        <td>{gameInfo.topic}</td>
        <td>{gameInfo.score}</td>
      </tr>
  )
}}

export default UserRecentGame