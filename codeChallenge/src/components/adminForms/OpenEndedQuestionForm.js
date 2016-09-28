import React, { Component } from 'react'
class OpenEndedQuestion extends Component {

  constructor(props) {
      super(props)
      this.state = {currentQuestion: 0}
    }

  componentWillReceiveProps(nextProps){
      if (this.props.openOptions.length < nextProps.openOptions.length ) {
        this.setState(Object.assign({},this.state,{currentQuestion: (nextProps.openOptions.length)-1 }))
      }
    }

  render() {
    let currentQuestion = this.props.openOptions[this.state.currentQuestion] || {}
    const { correctAnswer,oQuestionContent,language,score } = currentQuestion

    return (
      <div>
          <div>
            <label>Question content:</label>
              <br />
            <input type="text" placeholder="Please type the question here" {...oQuestionContent} />
          </div>
          <br />
          <div>
          <label>correctAnswer:</label>
            <br />
          <input type="text" placeholder="Please type the correct answer here" {...correctAnswer} />
          </div>
          <label>Select the language </label>
          <div>
            <select {...language} >
              <option></option>
              <option value="JS">Javascript</option>
              <option value="RUBY">Ruby</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <input type="hidden"  {...score}/>
      </div>
    )
  }
}

export default OpenEndedQuestion
