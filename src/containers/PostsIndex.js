import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts = () => _.map(this.props.posts, post =>
    <li className="list-group-item" key={post.id}>
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
    </li>
  )
  
  render () {
    return (
      <div className="container pt-2">
        <div className="text-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
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
