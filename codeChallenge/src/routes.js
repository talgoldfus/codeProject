import  React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import BoardContainer from './containers/BoardContainer'


export default (
  <div>
    <Route path="/game" component={BoardContainer} />
    <Route path="/" component={App} />
</div>

)
