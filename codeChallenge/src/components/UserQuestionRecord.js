import React, { Component } from 'react'
import { Link } from 'react-router'

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