
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Get() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='box'>
      <h2>GET Example</h2>
      {posts.slice(0, 11).map(post => (
        <div key={post.id}>
          <p>User ID: {post.userId}</p>
          <p>Title: {post.title}</p>
        </div>
      
      
      ))}
        <button onClick={()=> navigate("/post")}>click</button>
    </div>
  );
}

export default Get;
