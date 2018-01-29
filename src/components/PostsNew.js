import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField = ({ input, label }) =>
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        className="form-control"
        type="text"
        id={label}
        {...input}
      />
    </div>

  render () {
    return (
      <form className="container pt-2">
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="tags"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})( PostsNew )
