import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import BoardContainer from './containers/BoardContainer'
import CurrentQuestionContainer from './containers/currentQuestionContainer'
import TopicsContainer from './containers/TopicsContainer'
import Signin from './components/Signin'
import Signup from './components/Signup'
import UserPageContainer from './containers/UserPageContainer'
import LeaderBoardContainer from './containers/LeaderBoardContainer'
import Admin from './components/Admin'
import AddCategoryContainer from './containers/addCategoryContainer'
import AddBoardContainer from './containers/AddBoardContainer'
import Animations from './components/AnimationsTest'


export default (
  <div>
    <Route path="/" component={App} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
    <Route path="game" component={TopicsContainer} />
    <Route path="user" component={UserPageContainer} />
    <Route path="user/:id" component={UserPageContainer} />
    <Route path="leaderBoard" component={LeaderBoardContainer} />
    <Route path="game/:id" component={BoardContainer} >
      <Route path=":questionId" component={CurrentQuestionContainer} />
    </Route>
    <Route path="admin" component={Admin} >
      <Route path="addCategory" component={AddCategoryContainer} />
      <Route path="addBoard" component={AddBoardContainer} />
    </Route>
    <Route path="/test" component={Animations} />

</div>

)
