import React, { Component } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import  checkOpenAnswer from '../actions/checkOpenAnswer'

import {browserHistory} from 'react-router';


class OpenOption extends Component {


checkQuestion(formInput){
    checkOpenAnswer(formInput,this.props)
    browserHistory.push(`/game/${this.props.boardId}`)
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
  fields: [
    'content'
  ]
}, null, { checkOpenAnswer })(OpenOption);
