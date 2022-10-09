import React from "react";

const RedditPosts = ({ posts }) => {
  return (
    <>
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

export default RedditPosts;
