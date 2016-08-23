import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = ['Option','CategoryName','option[].content' ,'correct' ,'language','mQuestionContent', 'correctAnswer','oQuestionContent', 'language']
const validate = values => {
  const errors = {}
  if (!values.Option) {
    errors.Option = 'Required'
  }
  return errors
}

class AddOptionForm extends Component {

  byeBug(form){

    debugger}


  render() {
    const {
      fields: { Option },
      handleSubmit,
      previousPage,
      submitting
      } = this.props
    return (<form onSubmit={handleSubmit(this.byeBug.bind(this))}>
        <div>
          <label>Add Option</label>
          <div>
            <select {...Option} value={Option.value || ''}>
              <option></option>
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </select>
          </div>
          {Option.touched && Option.error && <div>{Option.error}</div>}
        </div>
        <div>
          <button type="button" disabled={submitting} onClick={previousPage}>
            <i/> Previous
          </button>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Finish
          </button>
        </div>
      </form>
    )
  }
}

AddOptionForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'AddGame',              // <------ same form name
  fields,                      // <------ all fields on last wizard page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(AddOptionForm)
