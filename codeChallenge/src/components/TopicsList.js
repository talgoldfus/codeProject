import React, { Component } from 'react'
import Topic from './Topic'
import { Link } from 'react-router'


class TopicsList extends Component {

componentWillMount(){
  this.props.getTopics()
  this.props.getCurrUserInfo()
}

  render() {
    
  var topics = this.props.topics.topic || []

  let topicslist =   Object.keys(topics).map((key)=>{
      return <Topic key={key} id={key} name={topics[key]} />
    });

  // const userInformation = this.props.userInfo.current_user || {email: "", id: 1}
  const userCurrId = localStorage.userId
  // const userName = userInformation.email

    return (
      <div>
        <div className="header">
          <div className="group">
            <span>FizzBuzz 2.0</span>
            <span className="user-link">Welcome <Link to={`/user/${userCurrId}`} >{localStorage.userName}</Link></span>
          </div>
          <div className="group">
            <Link to="leaderBoard" className="user-link">Leader Board</Link>
          </div>
        </div>
        <div className="group">
            <h1>Choose a Game Topic</h1>
            {topicslist}
        </div>
      </div>
    )

  }

}

export default TopicsList
