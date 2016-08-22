import React, { Component } from 'react'
import { Link } from 'react-router'

export default class UserPage extends Component {

  componentWillMount(){
    this.props.getLeaderBoard()
  }

  render(){

    return(
      <div>
        <h1>FIZZBUZZ HEROES</h1> 
          Hi
      </div>
    )

  }
}