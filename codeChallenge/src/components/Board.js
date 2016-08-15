import React, { Component } from 'react'

class Board extends Component {
  componentWillMount(){
    // debugger
    this.props.getBoard(this.props.params.id)
  }

  render() {
    return (
      <div>
      </div>
    )

  }

}

export default Board
