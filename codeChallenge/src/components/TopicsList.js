import React, { Component } from 'react'
import Topic from './Topic'
import { Link } from 'react-router'


class TopicsList extends Component {

componentWillMount(){
  this.props.getTopics()
}

  render() {

  var topics = this.props.topics.topic || []

  let topicslist =   Object.keys(topics).map((key)=>{
      return <Topic key={key} id={key} name={topics[key]} />
    });

    return (
      <div>
        <h2><Link to="user">Your Name</Link></h2>
        <h1><a>FizzBuzz 2.0</a></h1>
          {topicslist}
      </div>
    )

  }

}

export default TopicsList
