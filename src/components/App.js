import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import PostsIndex from '../containers/PostsIndex'
import PostsNew from '../containers/PostsNew'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route path="/" component={PostsIndex} />
        </Switch>
      </Router>
    )
  }
}

export default App
