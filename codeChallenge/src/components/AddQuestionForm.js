import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import MultipleChoiceQuestion from './MultipleChoiceQuestionForm'
import OpenEndedQuestion from './OpenEndedQuestionForm'



export const labels = {
  MultipleChoiceQuestion: 'Multiple Choice Question',
  OpenEndedQuestion: 'Open Ended Question',
}

class AddQuestionForm extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //     return nextProps.fields.multipleOptions.length < 1 || nextProps.fields.openOptions.length < 1
  // }

  componentWillUpdate(nextProps){
    debugger
    nextProps.fields.multipleOptions && nextProps.fields.multipleOptions.length < 1 ? nextProps.fields.multipleOptions.addField() : null
    nextProps.fields.openOptions && nextProps.fields.openOptions.length < 1 ? nextProps.fields.openOptions.addField() : null
  }




  render() {
    debugger
    
    const { fields, handleSubmit ,previousPage,submitting} = this.props
    return (
      <form onSubmit={handleSubmit}>
       {fields['multipleOptions'] && (<div key={'MultipleChoiceQuestion'}>
             <MultipleChoiceQuestion {...fields} />
       </div>)}
       {fields['openOptions'] && (<div key={'OpenEndedQuestionForm'}>
             <OpenEndedQuestion {...fields}/>
       </div>)}
        <div>
          <br />
        { (fields.correctAnswer ||fields.correct) && <button type="submit"> Next <i/></button>}
        </div>
      </form>
    )
  }
}

AddQuestionForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}


export default reduxForm({ form: 'AddGame' , destroyOnUnmount: false })(AddQuestionForm)
