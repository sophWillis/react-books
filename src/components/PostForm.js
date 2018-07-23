import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions.js';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverURL: '',
      title: '',
      description: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      cover: this.state.cover,
      title: this.state.title,
      description: this.state.description
    }

    this.props.createPost(post);

  }

  render() {
    return (
      <div>
        <h1>Create New Book</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Cover Image URL: </label><br/>
            <input type="text" name="cover" onChange={this.onChange} value={this.state.cover}/>
          </div>
          <div>
            <label>Title: </label><br/>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
          </div>
          <div>
            <label>Description: </label><br/>
            <textarea name="description" onChange={this.onChange} value={this.state.description}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
