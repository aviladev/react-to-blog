import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import PostsIndex from '../containers/PostsIndex'
import PostsNew from '../containers/PostsNew'
import PostsShow from '../containers/PostsShow'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route path="/posts/:id" component={PostsShow}/>
          <Route path="/" component={PostsIndex} />
        </Switch>
      </Router>
    )
  }
}

export default App
