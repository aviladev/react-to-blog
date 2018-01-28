import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import PostsIndex from '../containers/PostsIndex'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={PostsIndex} />
        </Switch>
      </Router>
    )
  }
}

export default App
