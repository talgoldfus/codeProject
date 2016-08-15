import React, { Component } from 'react'

class Cell extends Component {

  render(){
    return (
      <td id={this.props.id}>
        <Link to={`${this.props.location.pathname}/${this.props.id}/${this.props.content}`} >
          {this.props.difficulty}
        </Link>
      </td>
    )
  }
}

export default Cell
