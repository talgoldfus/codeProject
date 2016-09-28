import React, { Component } from 'react'
import { Link } from 'react-router'
import Menu from './Menu'

class MainHeader extends Component {
  constructor(props){
    super(props)
    this.state = {clicked:false}
  }

  handleClick(){
    this.setState(state => {
      return {clicked: !state.clicked}
    })
  }

  render(){
    return (
      <div className="MainHeader">
          <div className="headerText">
            <Link to='/game'><h1>FIZZBUZZ 2.0</h1></Link>
          </div>
          <div id="menuIcon">
              <img onClick={this.handleClick.bind(this)} src={require('../assets/images/menu-icon-01.png')} alt="menuIcon"/>
          </div>
        { this.state.clicked && <Menu display={this.handleClick.bind(this)}/> }
      </div>
    )
  }
}

export default MainHeader
