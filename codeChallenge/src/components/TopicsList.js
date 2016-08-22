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
        <div className="header group">
          <h2><Link to="user" className="user-link">{userName}</Link></h2>
          <br></br>
          <h3><Link to="leaderBoard" className="user-link">Leader Board</Link></h3>

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
