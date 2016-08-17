import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import BoardContainer from './containers/BoardContainer'
import CurrentQuestionContainer from './containers/currentQuestionContainer'
import OpenOption from './components/OpenOption'


export default (
  <div>
    <Route path="/" component={App} />
    <Route path="game/:id" component={BoardContainer} >
      <Route path=":questionId" component={CurrentQuestionContainer} />
    </Route>
    <Route path="/test" component={OpenOption} />
</div>

)
