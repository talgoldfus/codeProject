import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import  checkOpenAnswer from '../actions/checkOpenAnswer'


class OpenOption extends Component {

checkQuestion(formInput){
    checkOpenAnswer(formInput,this.props)
  }

  render(){
          const { fields: { content }, handleSubmit } = this.props;
  return  (
        <div>
          <form onSubmit={handleSubmit(this.checkQuestion.bind(this))}>
          <div >
            <label>Enter your answer here:</label>
            <textarea className="form-control" {...content} />
          </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )
  }
}

export default reduxForm({
  form: 'OpenQuestionForm',
  fields: ['content']
}, null, { checkOpenAnswer })(OpenOption);
