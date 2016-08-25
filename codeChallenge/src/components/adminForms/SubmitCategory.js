import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

//All fields from Add Category subforms
export const fields = [
  'CategoryName',
  'multipleOptions[].option[].content','multipleOptions[].correct' ,'multipleOptions[].language','multipleOptions[].mQuestionContent','multipleOptions[].score',
  'openOptions[].correctAnswer','openOptions[].oQuestionContent', 'openOptions[].language','openOptions[].score']


class SubmitCategory extends Component {

  render() {
    const { handleSubmit,submitting,onSubmit} = this.props
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>Submit Category</label>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Finish
          </button>
        </div>
      </form>
    )
  }
}

SubmitCategory.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'AddGame',              // <------ same form name
  fields                      // <------ all fields on last wizard page
})(SubmitCategory)
