import React, { Component } from 'react'
import OptionContainer from '../containers/optionContainer'
// import $ from 'jquery'

class CurrentQuestion extends Component {

  componentWillMount() {
    this.props.getOptions(this.props.params.questionId)
  }

  componentWillUpdate(nextProps) {
    if (nextProps.params.questionId !== this.props.params.questionId){
      this.props.getOptions(nextProps.params.questionId)
      return true
    }
    return false
  }

  render(){
    // $('.modal.question').show()
    // $('.screen').show()
    const optionsArray = this.props.info.options || []
    const difficulty = this.props.info.difficulty || []
    const optionsComponents = optionsArray.map(option=>{
      return <OptionContainer content={option.content} key={option.id} correct={option.correct}
      questionId={option.question_id} difficulty={difficulty} boardId={this.props.params.id}/>
    },this)
    return (
      <div className="screen">
        <div className="modal question">
          <h2>{this.props.info.content}</h2>
          <ul>
            {optionsComponents}
          </ul>
        </div>
      </div>
    )
  }
}

export default CurrentQuestion
