import React, { Component } from 'react'
import Topic from './Topic'
import MainHeader from './MainHeader'
import { Link } from 'react-router'


class TopicsList extends Component {

componentWillMount(){
  this.props.getTopics()
  this.props.getCurrUserInfo()
}

  render() {

  var topics = this.props.topics.topic || []

  let topicslist = Object.keys(topics).map((key)=>{
      return <Topic key={key} id={key} name={topics[key]} />
    });

  const userInformation = this.props.userInfo.current_user || {email: "", id: 1}
  const userCurrId = localStorage.userId
  const userName = userInformation.email

    return (
      <div>
        <MainHeader/>
        <div className="group">
            <h1>Choose a Game Topic</h1>
            {topicslist}
        </div>
      </div>
    )

  }

}

export default TopicsList