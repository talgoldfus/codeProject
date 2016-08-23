import React, { Component } from 'react'
import Header from './Header'
import CellContainer from '../containers/CellContainer'
import ScoreBoardContainer from '../containers/ScoreBoardContainer'
import InactiveCell from './InactiveCell'
import '../Board.css'

class Board extends Component {

  componentWillMount(){
    this.props.getBoard(this.props.params.id)
  }

    
  componentWillReceiveProps(nextProps) {
     if(nextProps.finished === 10 && this.props.gameBoard.players[0].userId) {
            this.props.finalAnalytics({userId: this.props.gameBoard.players[0].userId, boardId: this.props.params.id, score: this.props.gameBoard.players[0].score}, this.props.optionIds.options)
    } 
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
    let inactiveRows = 0
    for(let i=0; i<categories.length; i++){
      let row = this.getQuestionsByIndex(i, categories)
      rowCells.push(<tr>{row}</tr>)
      if (row.filter((question)=>{return question.type.name !== "InactiveCell"}).length < 1)
      { inactiveRows += 1}
    }
    return rowCells

  }

  render() {

  // const all_scores = this.props.gameBoard.players || []
  // const scores = all_scores.map(ob => {
  //     return ob.score
  // })

  const categories = this.props.gameBoard.categories || []
  const headers = categories.map(ob => {
    return <Header key={Object.keys(ob)[0]} header={Object.keys(ob)[0]} />
  })


    return (
        <div>
          <table className="gameboard">
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
            <div className="correct">
              <span>Correct!</span>
            </div>
            <div className="incorrect">
              <span>Incorrect!</span>
            </div>
          </div>
            <ScoreBoardContainer />
      </div>

    )
  }
}

export default Board

// <button name="logout" onClick={localStorage.clear()}> Log out </button> 
