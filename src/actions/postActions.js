import { FETCH_POSTS, NEW_POST } from './types.js';

export const fetchPosts = () => dispatch => {
    fetch(`https://my-json-server.typicode.com/sophWillis/react-books/posts`)
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
  );
};

export const createPost = (postData) => dispatch => {
  fetch(`https://my-json-server.typicode.com/sophWillis/react-books/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post => dispatch({
    type: NEW_POST,
    payload: post
  })
);
};
