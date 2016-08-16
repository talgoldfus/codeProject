import React, { Component } from 'react'
import Header from './Header'
import CellContainer from '../containers/CellContainer'
import InactiveCell from './InactiveCell'

class Board extends Component {

componentWillMount(){
  this.props.getBoard(this.props.params.id)


}

getQuestionsByIndex(idx, categories){

  var questionRow = []
    categories.forEach(category => {
      var first_key = Object.keys(category)[0]
      questionRow.push(category[first_key][idx])
    }
  )

  return questionRow.map(quesObj => {
    if (quesObj.active){
        return (<CellContainer key={quesObj.id} content={quesObj.content} isActive={quesObj.active} boardId={this.props.params.id}
        difficulty={quesObj.difficulty} id={quesObj.id}/>)}
    return (<InactiveCell key={quesObj.id} difficulty={quesObj.difficulty} />)

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
    return <Header key={Object.keys(ob)[0]} header={Object.keys(ob)[0]} />
  })


    return (
        <div>
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
        <div>
        {this.props.children}
        </div>
      </div>

    )
  }
}

export default Board
