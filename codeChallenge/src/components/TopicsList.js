import React, { Component } from 'react'
import Topic from './Topic'


class TopicsList extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentWillMount() {
    debugger
    // this.props.getTopics
  }

  render() {
    let topics = this.props.topics.map((topic) => {
      return <Topic id={topic.id} topic={topic.name} />
    })
    return (
      <ul>
        {topics}
      </ul>
    )
  }

}

export default TopicsList