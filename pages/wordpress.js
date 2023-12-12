// pages/blog.js

import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=4&pretty=true');
        const blog = await response.data;
        if(!window) return 
       
        setPosts(blog.posts.slice(1,4));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
  
  const decodeSpecialCharacters = (text) => {
    const element = document.createElement('textarea');
    element.innerHTML = text;
    return element.value;
  };
  let wordpress_site=`en.blog.wordpress.com`
  return (
    <div className="container">
      <Head>
        <title>Blog Page</title>
      </Head>
      
      <h1 className="heading">Latest Blog Posts from:</h1>
      <h2 style={{color:'blue'}}>{wordpress_site}</h2>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.ID} className="post">
            <h2 className="postTitle">{decodeSpecialCharacters(post.title)}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.trim() }} /> 
            
          </div>
        ))}
      </div> 
      <style jsx>{`
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.heading {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
}

.postsX {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.post {
  border: 1px solid #ccc;
  padding: 15px;
  
  text-align:left;
  border-radius: 5px;
  transition: transform 0.3s ease;
}
.post p {
line-height:1.3rem;
}
.post:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.postTitle {
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #444;
}

.postContent {
  color: #666;
  line-height: 1.6;
}

`}</style>
    </div>
    
  );
};

export default Blog;
