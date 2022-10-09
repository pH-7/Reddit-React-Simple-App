import axios from "axios";
import React, { useEffect, useState } from "react";

const Reddit = () => {
  const REDDIT_THREAD_URL = "https://www.reddit.com/r/reactjs.json";

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data: results } = await axios.get(REDDIT_THREAD_URL);

    setPosts(results.data.children.map((obj) => obj.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Reddit /r/reactjs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a> from <i>{post.author}</i>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reddit;
