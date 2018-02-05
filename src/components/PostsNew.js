import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderField = ({ input, label, meta: {error, touched} }) => (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        className={`form-control ${touched && error
          ? 'is-invalid'
          : touched 
            ? 'is-valid'
            : ''}`
        }
        type="text"
        id={label}
        {...input}
      />
      {touched
        ? <div className="invalid-feedback">{error}</div>
        : ''
      }
    </div>
  )

  onSubmit = values => {
    console.log(values)
  }

  render () {
    const { handleSubmit } = this.props
    
    return (
      <form className="container pt-2"
        onSubmit={ handleSubmit(this.onSubmit) }
      >
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Enter a title!'
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories'
  }

  if (!values.content) {
    errors.content = 'Enter some content'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})( PostsNew )
