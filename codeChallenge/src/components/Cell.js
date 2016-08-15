import React, { Component } from 'react'

class Cell extends Component {

render(){
  return (
    <td id={this.props.id}>
      <p>{this.props.difficulty}</p>
    </td>
  )
}}

export default Cell
