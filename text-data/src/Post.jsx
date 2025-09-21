import React from 'react';
import axios from 'axios';

function Post() {
  const handlePost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'New Post',
      body: 'This is a new post.'
    })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>POST Example</h2>
      <button onClick={handlePost}>Add Post</button>
    </div>
  );
}

export default Post;
