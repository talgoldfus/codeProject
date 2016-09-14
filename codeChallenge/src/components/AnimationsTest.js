import React, { Component } from 'react'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Animations extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>

               <h1>My Element...</h1>
      </ReactCSSTransitionGroup>
    )
  }

}


export default Animations
