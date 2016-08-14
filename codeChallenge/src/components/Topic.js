import React, { Component } from 'react'

class Topic extends Component {

  constructor(props){
    super(props)
  }



  return (
      <div id={topic.id} >
      <Link to={'/game'}>{topic.name}</Link>
      </div>
  )
}

export default Topic
