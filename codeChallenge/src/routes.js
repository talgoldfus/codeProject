import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import BoardContainer from './containers/BoardContainer'
import CurrentQuestionContainer from './containers/currentQuestionContainer'
import OpenOption from './components/OpenOption'
import SmartTopicsContainer from './containers/TopicsContainer'
import UserPageContainer from './containers/UserPageContainer'
import Signin from './components/Signin'
import Signup from './components/signup'


export default (
  <div>
    <Route path="/" component={App} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
    <Route path="game" component={SmartTopicsContainer} />
    <Route path="user" component={UserPageContainer} />
    <Route path="game/:id" component={BoardContainer} >
      <Route path=":questionId" component={CurrentQuestionContainer} />
    </Route>
    <Route path="/test" component={OpenOption} />
</div>

)
