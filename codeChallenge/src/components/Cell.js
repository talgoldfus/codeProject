import React, { Component } from 'react'
import { Link } from 'react-router'

class Cell extends Component {
  render(){
    return (
      <td id={this.props.id}>
        <Link to={`/game/${this.props.boardId}/${this.props.id}`} onClick={()=>{this.props.removeLink(this.props.id)} } >
          {this.props.difficulty}
        </Link>
      </td>
    )
  }
}

export default Cell
