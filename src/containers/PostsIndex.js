import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts = () => _.map(this.props.posts, post =>
    <li className="list-group-item" key={post.id}>
      {post.title}
    </li>
  )
  
  render () {
    return (
      <div className="container">
        <h3 className="mt-2">Posts</h3>
        <ul className="list-group list-group-flush">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => ({posts})

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
