import React, { Component } from 'react'
import OptionContainer from '../containers/optionContainer'
import OpenOptionContainer from '../containers/openOptionContainer'

class CurrentQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: false
    }

  }
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
    const currentOptions = this.props.info.options || []
    const difficulty = this.props.info.difficulty || []
    let optionsComponents ;

    if(currentOptions.length === 1){
      optionsComponents = <OpenOptionContainer answer={currentOptions[0].correct_answer} language={currentOptions[0].language} key={currentOptions[0].id} questionId={currentOptions[0].question_id} difficulty={difficulty} boardId={this.props.params.id}/>
    }else{
      optionsComponents = currentOptions.map(option=>{
        return <OptionContainer content={option.content} key={option.id} correct={option.correct}
        questionId={option.question_id} difficulty={difficulty} boardId={this.props.params.id} id={option.id} />
      },this)
    }

    return (
      <div className="screen">
        <div className="modal question">
          <h2>{this.props.info.content}</h2>
          <ul>
            {optionsComponents}
          </ul>
          <div className="correct">Correct!</div>
          <div className="incorrect">Incorrect!</div>
        </div>
      </div>
    )
  }
}

export default CurrentQuestion
