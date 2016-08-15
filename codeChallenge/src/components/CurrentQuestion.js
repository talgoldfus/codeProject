import React, { Component } from 'react'
import Option from './Option'

class CurrentQuestion extends Component {
  componentWillMount() {
    this.props.getOptions(this.props.params.questionId)
  }
  render(){
    debugger;
    const optionsArray = this.props.info.options || []
    const optionsComponents = optionsArray.map(option=>{
      return <Option content={option.content} correct={option.correct}
      questionId={option.question_id} />
    })
    return (
      <div>
        {this.props.info.content}
        <div>
          {optionsComponents}
        </div>
      </div>
    )
  }
}

export default CurrentQuestion
