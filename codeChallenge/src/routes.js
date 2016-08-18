import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import BoardContainer from './containers/BoardContainer'
import CurrentQuestionContainer from './containers/currentQuestionContainer'
import OpenOption from './components/OpenOption'

import Signup from './components/signup'
import SmartTopicsContainer from './containers/TopicsContainer'


export default (
  <div>
    <Route path="/" component={App} />
    <Route path="signup" component={Signup} /> 
    <Route path="board" component={SmartTopicsContainer} />
    <Route path="game/:id" component={BoardContainer} >
      <Route path=":questionId" component={CurrentQuestionContainer} />
    </Route>
    <Route path="/test" component={OpenOption} />
</div>

)
