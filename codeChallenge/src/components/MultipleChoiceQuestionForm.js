import React, { Component, PropTypes } from 'react'
class MultipleChoiceQuestion extends Component {

  componentWillMount(){
    debugger
    // if (this.props.multipleOptions.length === 0) {
    // this.props.multipleOptions.addField()

    // for(let i = 0; i < 4; i++){
    //     this.props.multipleOptions.option.addField()
    // }
  // }
  }

  componentWillUpdate(nextProps){
    debugger}

  render() {
    debugger
    const {multipleOptions} = this.props
    let correct = multipleOptions[0].correct
    const { option ,mQuestionContent,language}  = multipleOptions[0]

    debugger
    return (
      <div>
          <div>
            <label>Question content:</label>
              <br />
            <input type="text" placeholder="Please type the question here" {...mQuestionContent} />
          </div>
          <br />
          <label>Options:</label>
              {option.map((option, index)=> <div key={index} >
              <input type="text" placeholder={`Option ${index + 1}`} {...option.content} />
          </div>
          )}
          <label>Select the correct option </label>
          <div>
            <select {...correct} value={correct.value || ''}>
              <option></option>
              <option value="0">Option 1</option>
              <option value="1">Option 2</option>
              <option value="2">Option 3</option>
              <option value="3">Option 4</option>
            </select>
          </div>
          <label>Select the language </label>
          <div>
            <select
              {...language}
              value={language.value || ''}>
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

export default MultipleChoiceQuestion
