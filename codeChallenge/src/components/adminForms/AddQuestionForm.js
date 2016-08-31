import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import MultipleChoiceQuestion from './MultipleChoiceQuestionForm'
import OpenEndedQuestion from './OpenEndedQuestionForm'

export const labels = {
  MultipleChoiceQuestion: 'Multiple Choice Question',
  OpenEndedQuestion: 'Open Ended Question',
}

class AddQuestionForm extends Component {

  constructor(props) {
    super(props)
    this.state = { AddMultiple: true ,AddOpen: true }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.fields.multipleOptions &&  this.state.AddMultiple){
      this.setState( Object.assign({}, this.state , {AddMultiple: false}),()=>nextProps.fields.multipleOptions.addField({score: this.props.score}))
    }
    else if (nextProps.fields.openOptions &&  this.state.AddOpen) {
      this.setState( Object.assign( {}, this.state , {AddOpen: false}),()=>nextProps.fields.openOptions.addField({score: this.props.score}))
    }
  }

  render() {
    const { fields, handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit}>
       {fields['multipleOptions'] && (<div key={'MultipleChoiceQuestion'}>
             <MultipleChoiceQuestion  {...fields} />
       </div>)}
       {fields['openOptions'] && (<div key={'OpenEndedQuestionForm'}>
             <OpenEndedQuestion   {...fields}/>
       </div>)}
        <div>
          <br />
        <button type="button" >
            <i/> Previous
        </button>
        { (fields.multipleOptions ||fields.openOptions) && <button type="submit"> Next <i/></button>}
        </div>
      </form>
    )
  }
}

AddQuestionForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}


export default reduxForm(
{form: 'AddGame',
// validate,
destroyOnUnmount: false })(AddQuestionForm)
