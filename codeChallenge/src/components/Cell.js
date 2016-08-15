import React, { Component } from 'react'
import { Link } from 'react-router'

class Cell extends Component {

  render(){

    return (
      <td id={this.props.id}>
        <Link to={`${this.props.location}/${this.props.id}?info=${this.props.content}`} >
          {this.props.difficulty}
        </Link>
      </td>
    )
  }
}

export default Cell

// ?info=${this.props.content}