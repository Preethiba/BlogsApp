import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  //field is used to wireup the renderTitleField with the Field component
  renderFields(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          {...field.input} //take input obj from field obj
        />
        {/* to show error to the user */}
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title" //custom properties passed through field prop to renderFields method
          component={this.renderFields}
          // Field component will call renderFields at some point
        />
        <Field
          name="categories"
          label="Categories" //custom properties passed through field prop to renderFields method
          component={this.renderFields}
          // Field component will call renderFields at some point
        />
        <Field
          name="content"
          label="Posts Content" //custom properties passed through field prop to renderFields method
          component={this.renderFields}
          // Field component will call renderFields at some point
        />
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  //Validate the input values
  if (!values.title) {
    errors.title = 'Please enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Please enter the categories';
  }
  if (!values.content) {
    errors.content = 'Please enter some content';
  }
  //return the error object
  //if error object is empty, then the form is fine to submit
  //if error object has any properties, then redux form assumes that the form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
