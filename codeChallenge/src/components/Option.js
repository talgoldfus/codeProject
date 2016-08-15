import React, { Component } from 'react'

class Option extends Component {

render(){
  return (
    <div ref={this.props.correct}>
      <h1>{this.props.content}</h1>
    </div>
  )
}}

export default Option
