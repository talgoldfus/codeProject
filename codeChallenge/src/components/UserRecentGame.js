import React, { Component } from 'react'
import { Link } from 'react-router'

class UserRecentGame extends Component {

render(){

  const gameInfo = this.props.gameInfo
  
  return (
      <tr>
        <td>{gameInfo.date}</td>
        <td>{gameInfo.topic}</td>
        <td>{gameInfo.score}</td>
      </tr>
  )
}}

export default UserRecentGame