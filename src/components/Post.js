import React from 'react';
import {CardImg} from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions.js'

class Post extends React.Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id} className="flip-container">
        <div className="flipper">
          <div className="front">
            <CardImg className="cover" top width="100%" src={post.cover}></CardImg>
          </div>
          <div className="back">
            <h4>{post.title}</h4>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <h1>Library</h1>
        <div className="library">
          {postItems}
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({posts: state.posts.items, newPost: state.posts.item})

export default connect(mapStateToProps, {fetchPosts})(Post);
