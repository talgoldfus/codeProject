import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import BoardContainer from './containers/BoardContainer'
import CurrentQuestionContainer from './containers/currentQuestionContainer'


export default (
  <div>
    <Route path="/" component={App} />    
    <Route path="game/:id" component={BoardContainer} >
      <Route path=":questionId(:info)" component={CurrentQuestionContainer} />
    </Route>
    
</div>

)
