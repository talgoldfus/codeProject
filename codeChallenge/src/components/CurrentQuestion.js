import React, { Component } from 'react'
import Option from './Option'

class CurrentQuestion extends Component {

  componentWillMount() {
    this.props.getOptions(this.props.params.questionId)
  }


  componentWillUpdate(nextProps) {

    if (nextProps.params.questionId !== this.props.params.questionId){
    this.props.getOptions(this.props.params.questionId)
    return true}
    return false
  }

  render(){
    debugger
    const optionsArray = this.props.info.options || []
    const optionsComponents = optionsArray.map(option=>{
      return <Option content={option.content} key={option.id} correct={option.correct}
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
