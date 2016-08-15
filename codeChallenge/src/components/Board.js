import React, { Component } from 'react'
import Header from './Header'
import Cell from './Cell'

class Board extends Component {

componentWillMount(){
  this.props.getBoard(7)
}

getQuestionsByIndex(idx, categories){
  var questionRow = []
    categories.forEach(category => {
      var first_key = Object.keys(category)[0]
      questionRow.push(category[first_key][idx])
    }
  )
  debugger;
  return questionRow.map(quesObj => {
      return (<Cell content={quesObj.content}
    difficulty={quesObj.difficulty} id={quesObj.id}/>)
  })
}

populateRows(categories){
  let rowCells=[]
  for(let i=0; i<categories.length; i++){
    rowCells.push(<tr>{this.getQuestionsByIndex(i, categories)}</tr>)
  }
  return rowCells
}

  render() {
  const categories = this.props.gameBoard.categories || []
  const headers = categories.map(ob => {
    return <Header header = {Object.keys(ob)[0]} />
  })
    return (
      <table>
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {this.populateRows(categories)}
        </tbody>
      </table>
    )
  }
}

export default Board
