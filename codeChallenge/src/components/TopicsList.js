import React, { Component } from 'react'
import Topic from './Topic'
import { Link } from 'react-router'


class TopicsList extends Component {

componentWillMount(){
  this.props.getTopics()
  this.props.getInfo()
}

  render() {

  var topics = this.props.topics.topic || []

  let topicslist =   Object.keys(topics).map((key)=>{
      return <Topic key={key} id={key} name={topics[key]} />
    });

  const userInfo = this.props.userInfo.user_info || {email: ""}
  const userName = userInfo.email

    return (
      <div>
        <h2><Link to="user">{userName}</Link></h2>
        <h1><a>FizzBuzz 2.0</a></h1>
          {topicslist}
      </div>
    )

  }

}

export default TopicsList
