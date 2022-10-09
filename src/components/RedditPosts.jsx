import React from "react";
import { ListGroup } from "react-bootstrap";

const RedditPosts = ({ post }) => {
  return (
    <>
      <ListGroup.Item key={post.id}>
        <a href={post.url}>{post.title}</a> from <i>{post.author}</i>
      </ListGroup.Item>
    </>
  );
};

export default RedditPosts;