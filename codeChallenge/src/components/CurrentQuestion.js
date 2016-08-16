import React, { Component } from 'react'
import OptionContainer from '../containers/optionContainer'

class CurrentQuestion extends Component {

  componentWillMount() {
    this.props.getOptions(this.props.params.questionId)
  }

  componentWillUpdate(){
    this.props.getOptions(this.props.params.questionId)
  }

  render(){
    const optionsArray = this.props.info.options || []
    const optionsComponents = optionsArray.map(option=>{
      return <OptionContainer content={option.content} key={option.id} correct={option.correct}
      questionId={option.question_id} />
    })
    return (
      <div>
        <h2>{this.props.info.content}</h2>
        <ul>
          {optionsComponents}
        </ul>
      </div>
    )
  }
}

export default CurrentQuestion
