import React, { Component } from 'react'
import Topic from './Topic'


class TopicsList extends Component {

componentWillMount(){
  this.props.getTopics()
}

  render() {

  var topics = this.props.topics.topic || []

  let topicslist =   Object.keys(topics).map((key)=>{
      return <Topic id={key} name={topics[key]} />
    });


    return (
      <div>
          {topicslist}
      </div>
    )

  }

}

export default TopicsList
