import React, { Component } from 'react'
import { Link } from 'react-router'
import UserQuestionRecord from './UserQuestionRecord'

class UserQuestionTable extends Component {

  //should receive a collection of questions
render(){


  const qs = []

    for(var question in this.props.questions){
      qs.push(<UserQuestionRecord questionInfo={this.props.questions[question]}/>)
    } 
 
  return (
    <div>
      <h1>{this.props.title}</h1>
      <table className="questionTable">
       <thead>
          <th>Points</th>
          <th>Content</th>
          <th>Difficulty</th>
        </thead>
        <tbody>
          {qs}
        </tbody>
      </table>
      </div>
  )
}}

export default UserQuestionTable