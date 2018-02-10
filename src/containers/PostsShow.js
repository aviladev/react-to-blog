import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPost } from '../actions'

class PostsShow extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }
  
  render () {
    const { post } = this.props
    
    if (!post) {
      return <div>Loading...</div>
    }

    const { title, categories, content } = post

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{title}</h3>
        <h6>Categories: {categories}</h6>
        <p>{content}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) =>
  ({ post: posts[ownProps.match.params.id] })

export default connect(
  mapStateToProps, { fetchPost }
)(PostsShow)
