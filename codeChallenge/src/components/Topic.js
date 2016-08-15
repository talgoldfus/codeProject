import React, { Component } from 'react'
import { Link } from 'react-router'

class Topic extends Component {
  constructor(props){
    super(props)
  }

render(){
  return (
      <div id={this.props.id} >
        <Link to={`/game/${this.props.id}`}>{this.props.name}</Link>
      </div>
  )
}}

export default Topic


// <Link to={`/game?id=${this.props.id}`}>{this.props.name}</Link>