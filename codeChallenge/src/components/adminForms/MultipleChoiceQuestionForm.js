import React, { Component, PropTypes } from 'react'
class MultipleChoiceQuestion extends Component {

  constructor(props) {
      super(props)
      this.state = {currentQuestion: 0}
      this.createOptions.bind(this)
    }

  createOptions(props,index){
    debugger
      for(let i = 0; i < 4; i++){
             //Adds options to the new multipleOptions object in the array
             props.multipleOptions[index].option.addField()
       }
    }

  componentWillReceiveProps(nextProps){
      debugger
      if (this.props.multipleOptions.length < nextProps.multipleOptions.length ) {
        this.setState(Object.assign({},this.state,{currentQuestion: (nextProps.multipleOptions.length)-1 }),this.createOptions(nextProps,(nextProps.multipleOptions.length)-1))
      }
    }

  render() {
    let currentQuestion = this.props.multipleOptions[this.state.currentQuestion] || {}
    const { option=[],score,correct,mQuestionContent,language } = currentQuestion
    let optionsArray= option.map((option, index)=> { return (
      <div key={index} >
        <input type="text" placeholder={`Option ${index + 1}`} {...option.content} />
      </div>)
    }
  )
    return (
      <div>
          <div>
            <label>Question content:</label>
              <br />
            <input type="text" placeholder="Please type the question here" {...mQuestionContent} />
          </div>
          <br />
          <label>Options:</label>
              {optionsArray}
          <label>Select the correct option </label>
          <div>
            <select {...correct} >
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
              {...language} >
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

export default MultipleChoiceQuestion
