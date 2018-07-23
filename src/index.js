import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';

import Post from './components/Post.js';
import PostForm from './components/PostForm.js';

import store from './store.js';

class ContentFeed extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <PostForm/>
          <hr/>
          <Post/>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(
  <ContentFeed/>, document.getElementById('root'));
