import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPost, deletePost } from '../actions'

class PostsShow extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }
  
  onDeleteClick = () => {
    const { id } = this.props.match.params
    this.props.deletePost(id, () =>
      this.props.history.push('/')
    )
  }

  render () {
    const { post } = this.props
    
    if (!post) {
      return <div>Loading...</div>
    }

    const { title, categories, content } = post

    return (
      <div class="container pt-2">
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger float-sm-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <h3 className="mt-4">{title}</h3>
        <h6>Categories: {categories}</h6>
        <p className="mt-4" >{content}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) =>
  ({ post: posts[ownProps.match.params.id] })

export default connect(
  mapStateToProps, { fetchPost, deletePost }
)(PostsShow)
