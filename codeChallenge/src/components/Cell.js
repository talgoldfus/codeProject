import React, { Component } from 'react'
import { Link } from 'react-router'

class Cell extends Component {

componentWillUpdate(){
}

  render(){

    return (
      <td id={this.props.id}>
        <Link to={`/game/${this.props.boardId}/${this.props.id}`} >
          {this.props.difficulty}
        </Link>
      </td>
    )
  }
}

export default Cell

// ?info=${this.props.content}
