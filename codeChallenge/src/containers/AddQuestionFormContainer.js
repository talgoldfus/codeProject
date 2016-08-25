import React, { Component, PropTypes } from 'react'
import AddQuestionForm, { labels } from '../components/adminForms/AddQuestionForm'

class AddQuestionFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "",
      QuestionTypes: {
        MultipleChoiceQuestion: ['multipleOptions[].option[].content' ,'multipleOptions[].correct' ,'multipleOptions[].language','multipleOptions[].mQuestionContent','multipleOptions[].score'],
        OpenEndedQuestion:  ['openOptions[].correctAnswer','openOptions[].oQuestionContent', 'openOptions[].language','openOptions[].score']
      }
    }
    this.calculateScore.bind(this)
    this.toggleState.bind(this)
  }

  calculateScore(){
    let score = 0
    switch (this.props.page) {
      case 3:
        score = 400
        break;
      case 4:
        score = 600
        break;
      case 5:
        score = 800
        break;
      case 6:
        score = 1000
        break;
      default:
        score = 200
    }
    return score
  }

  toggleState(field){
    this.setState( Object.assign( {}, this.state , {selected: field} ))
  }

  render() {
      let selectedFields = []
      if (this.state.QuestionTypes[this.state.selected]){selectedFields = this.state.QuestionTypes[this.state.selected]}

    return (
      <div>
        <h2> Question {this.props.page - 1 } of 5 for {this.calculateScore()}  </h2>
        <div>
        <h3> Choose the type of your question : </h3>
          {Object.keys(this.state.QuestionTypes).map(field =>
            <label key={field}>
              <input type="radio"
                name="QuestionType"
                value={field}
                onChange={()=>this.toggleState(field)} /> {labels[ field ]}</label>
        )}
        </div>
          <br />
        <AddQuestionForm
          onSubmit={this.props.onSubmit}
          previousPage={this.props.previousPage}
          fields={selectedFields}
          page ={this.props.page}
          score= {this.calculateScore()}
          />
      </div>
    )
  }
}



export default AddQuestionFormContainer
