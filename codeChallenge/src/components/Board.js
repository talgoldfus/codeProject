import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import $ from 'jquery';
import TableHeader from './TableHeader'
import CellContainer from '../containers/CellContainer'
import ScoreBoardContainer from '../containers/ScoreBoardContainer'
import InactiveCell from './InactiveCell'
import MainHeader from './MainHeader'
import '../Board.css'

class Board extends Component {

  componentWillMount(){
    this.props.getBoard(this.props.params.id)
  }

  componentWillReceiveProps(nextProps) {
     if(nextProps.finished === 3 && this.props.gameBoard.players[0].userId) {
        this.props.finalAnalytics({userId: this.props.gameBoard.players[0].userId, boardId: this.props.params.id, score: this.props.gameBoard.players[0].score}, this.props.optionIds.options)
        let boardId = this.props.params.id
          $(".game-finish").fadeIn(750, ()=>{
            browserHistory.push(`/game/${boardId}`)
            $("game-finish").delay(10000);
            $("game-finish").fadeOut(750);
            browserHistory.push("/leaderboard")
          });
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
    for(let i=0; i<categories.length; i++){
      let row = this.getQuestionsByIndex(i, categories)
      rowCells.push(<tr>{row}</tr>)
    }
    return rowCells
  }

  render() {
    const categories = this.props.gameBoard.categories || []
    const headers = categories.map(ob => {
      return <TableHeader key={Object.keys(ob)[0]} header={Object.keys(ob)[0]} />
  })


    return (
      <div>
          <MainHeader/>
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
            <div className="time-up">
              <span>Time Up!</span>
            </div>
            <div className="game-finish">
              <span>Game Finished!</span>
            </div>
          </div>
            <ScoreBoardContainer />
      </div>
    </div>
    )
  }
}

export default Board
