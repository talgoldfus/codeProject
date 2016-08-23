import React, { Component, PropTypes } from 'react'
class OpenEndedQuestion extends Component {

  render() {
    const { correctAnswer,oQuestionContent,language } = this.props

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
            <select {...language} value={language.value || ''}>
              <option></option>
              <option value="JS">Javascript</option>
              <option value="RUBY">Ruby</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
      </div>
    )
  }
}

export default OpenEndedQuestion
