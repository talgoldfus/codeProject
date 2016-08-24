import React, { Component } from 'react'
import { Link } from 'react-router'

class Leader extends Component {

render(){

  const leader = this.props.leader
  return (
      <div>
        <h1><Link to={`/user/${leader.id}`}> {leader.name} </Link> | {leader.score} </h1>
      </div>
  )
}}

export default Leader

// <h2><Link to="user" className="user-link">{userName}</Link></h2>