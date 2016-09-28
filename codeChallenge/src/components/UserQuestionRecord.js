import React, { Component } from 'react'

class UserQuestionRecord extends Component {

render(){

  const questionInfo = this.props.questionInfo

  return (
      <tr>
        <td>{questionInfo.difficulty}</td>
        <td>{questionInfo.content}</td>
        <td>{questionInfo.percentage_right}</td>
      </tr>
  )
}}

export default UserQuestionRecord
