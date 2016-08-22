import React, { Component } from 'react'
import { Link } from 'react-router'

class Leader extends Component {

render(){

  const leader = this.props.leader
  
  return (
      <div>
        <h1>{leader.name} | {leader.score}</h1>
      </div>
  )
}}

export default Leader