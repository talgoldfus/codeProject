import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = ['CategoryName' ]

const validate = values => {
  const errors = {}
  if (!values.CategoryName) {
    errors.CategoryName = 'Required'
  } else if (values.CategoryName.length > 25) {
    errors.CategoryName = 'Must be 25 characters or less'
  }
  return errors
}

class AddCategoryForm extends Component {
  render() {
    const {
      fields: { CategoryName },
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category Name</label>
          <div>
            <input type="text" placeholder="Category Name" {...CategoryName}/>
          </div>
          {CategoryName.touched && CategoryName.error && <div>{CategoryName.error}</div>}
        </div>
        <div>
          <button type="submit">
            Next <i/>
          </button>
        </div>
      </form>
    )
  }
}

AddCategoryForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'AddGame',              // <------ same form name
  fields,                      // <------ only fields on this page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(AddCategoryForm)
