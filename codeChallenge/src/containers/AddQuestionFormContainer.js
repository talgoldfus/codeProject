import React, { Component, PropTypes } from 'react'
import AddQuestionForm, { labels } from '../components/AddQuestionForm'

class AddQuestionFormContainer extends Component {
  constructor(props) {
    super(props)
    let num = this.props.page
    this.state = {
      selected: "",
      QuestionTypes: {
        MultipleChoiceQuestion: ['multipleOptions[].option[].content' ,'multipleOptions[].correct' ,'multipleOptions[].language','multipleOptions[].mQuestionContent'],
        OpenEndedQuestion:  ['openOptions[].correctAnswer','openOptions[].oQuestionContent', 'openOptions[].language']
      }

    }
    this.toggleState.bind(this)
  }

  toggleState(field){
    this.setState( Object.assign( {}, this.state , {selected: field} ))
      // {[field]:{ selected: !this.state[field].selected , fields:this.state[field].fields }})
  }

  render() {

      let selectedFields = []
      if (this.state.QuestionTypes[this.state.selected]){selectedFields = this.state.QuestionTypes[this.state.selected]}

    return (
      <div>
        <h2> Question {this.props.page} of 5 </h2>
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
          fields={selectedFields}
          />
      </div>
    )
  }
}
AddQuestionFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired // passed in by example engine to pop up modal
}


export default AddQuestionFormContainer
