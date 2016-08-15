import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import BoardContainer from './containers/BoardContainer'
import CurrentQuestionContainer from './containers/currentQuestionContainer'


export default (
  <div>
    <Route path="/game/:id" component={BoardContainer} >
      <Route path="game/:id/:question(/:info)" component={CurrentQuestionContainer} />
    </Route>
    <Route path="/" component={App} />
</div>

)
