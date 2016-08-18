import React, { Component } from 'react'
import OptionContainer from '../containers/optionContainer'
import OpenOptionContainer from '../containers/openOptionContainer'



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
    const currentOptions = this.props.info.options || []
    const difficulty = this.props.info.difficulty || []
    let optionsComponents ;

    if(Array.isArray(currentOptions)){
      optionsComponents = currentOptions.map(option=>{
        return <OptionContainer content={option.content} key={option.id} correct={option.correct}
        questionId={option.question_id} difficulty={difficulty} boardId={this.props.params.id}/>
      },this)
    }
    else{
      optionsComponents = <OpenOptionContainer answer={currentOptions.correct_answer} language={currentOptions.language} key={currentOptions.id} questionId={currentOptions.question_id} difficulty={difficulty} boardId={this.props.params.id}/>
    }

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
