import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'BoardName' ]

const validate = values => {
  const errors = {}
  if (!values.BoardName) {
    errors.BoardName = 'Required'
  } else if (values.BoardName.length > 15) {
    errors.BoardName = 'Must be 15 characters or less'
  }
  return errors
}

class AddBoardForm extends Component {



  render() {
    const {
      fields: { BoardName },
      handleSubmit
    } = this.props

    return (<form onSubmit={handleSubmit}>
        <div>
          <h4>Please choose your board name:</h4>
          <div>
              <label>Board Name</label>
              <input type="text" placeholder="Board Name" {...BoardName}/>
          </div>
          {BoardName.touched && BoardName.error && <div>{BoardName.error}</div>}
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

AddBoardForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'AddGame',
  fields,
  destroyOnUnmount: false,
  validate
})(AddBoardForm)
