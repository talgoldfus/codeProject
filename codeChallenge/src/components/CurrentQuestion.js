import React, { Component } from 'react'
import OptionContainer from '../containers/optionContainer'

class CurrentQuestion extends Component {

  componentWillMount() {
    this.props.getOptions(this.props.params.questionId)
  }

  componentWillUpdate(nextProps) {
    if (nextProps.params.questionId !== this.props.params.questionId){
    this.props.getOptions(nextProps.params.questionId)
    return true}
    return false
  }

  render(){
    const optionsArray = this.props.info.options || []
    const optionsComponents = optionsArray.map(option=>{
      return <OptionContainer content={option.content} key={option.id} correct={option.correct}
      questionId={option.question_id} />
    })
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
