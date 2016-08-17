import React, { Component } from 'react'
// import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import  checkOpenAnswer from '../actions/checkOpenAnswer'


class OpenOption extends Component {


  checkQuestoin(formInput){

    this.props.checkOpenAnswer(formInput,this.props)

  }

  render(){
              const { fields: { content }, handleSubmit } = this.props;
  return  (
        <div>
          <form onSubmit={handleSubmit(this.checkQuestoin.bind(this))}>
          <div >
            <label>Content</label>
            <textarea className="form-control" {...content} />
          </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      )

        //
        // <Link to={`/game/${this.props.boardId}`} onClick={this.checkAnswer.bind(this)}>
        //   {this.props.content}
        // </Link>
  }
}

export default reduxForm({
  form: 'OpenQuestionForm',
  fields: [
    'content'
  ]
}, null, { checkOpenAnswer })(OpenOption);
