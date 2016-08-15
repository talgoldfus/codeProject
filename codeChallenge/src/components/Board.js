import React, { Component } from 'react'

class Board extends Component {
componentWillMount(){
  this.props.getBoard(9)
}

  render() {
    return (
      <div>
      </div>
    )

  }

}

export default Board
