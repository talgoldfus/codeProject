import React, { Component } from 'react'
import Topic from './Topic'


class TopicsList extends Component {
  // constructor(props) {
  //   super(props)
  // }

  // componentWillMount() {
  //   debugger
  //   this.props.getTopics()
  // }

  render() {
        this.props.getTopics().then(()=> {

    var topics = this.props.topic// || []
    debugger
    let topicslist = topics.map((topic) => {
      return <Topic id={topic.id} topic={topic.name} />
    })
    return (
      <div>
        <button onClick={() => { this.props.getTopics() }} >
          Get topics
        </button>
        <ul>
          {topicslist}
        </ul>
      </div>
    )
    })
  }

}

export default TopicsList