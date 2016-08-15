import React, { Component } from 'react'

class Header extends Component {

render(){
  return (
    <th>
      <p>{this.props.header}</p>
    </th>
  )
}}

export default Header
