import React from 'react'

const Topic = (topic) => {
  
  return (
      <li id={topic.id}> {topic.name} </li>
  )
}

export default Topic
