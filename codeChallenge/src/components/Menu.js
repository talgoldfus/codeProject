import React,{Component}from 'react';
import {Link ,withRouter } from 'react-router'

class Menu extends Component{

render(){

  const userCurrId = localStorage.userId

    var menueLinks = [
      {path:`/user/${userCurrId}`,text:'User Page'},
      {path:'/leaderBoard',text:'Leader Board'},
      {path:'/game', text:'Home'},
    ]

    const links= menueLinks.map((link)=>{
      if (this.props.location.pathname !== link.path){
        return  (
          <div key={link.text} >
            <Link
              to={link.path}
              className="menuBtn"
              onClick={this.props.display}>
              {link.text}
            </Link>
          </div>
        )
      }
    })

    return (
        <div className="menu">
            {links}
        </div>
    )
  }
}

export default withRouter(Menu)
