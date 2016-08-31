import React, { Component } from 'react'
import Leader from './Leader'

export default class UserPage extends Component {

  componentWillMount(){
    this.props.getLeaderBoard()
  }

  render(){

    const leaderArray = this.props.leaderBoard || []

    const leaders = leaderArray.map(leader => {return <Leader leader={leader}/>})

    return(
      <div>
        <h1>FIZZBUZZ HEROES</h1>
        {leaders}
      </div>
    )

  }
}
