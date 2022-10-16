import React from "react";
import { ListGroup } from "react-bootstrap";

const RedditPosts = ({ post, oddRow }) => {
  return (
    <>
      <ListGroup.Item variant={oddRow ? "dark" : "light"}>
        <a href={post.url}>{post.title}</a> from <i>{post.author}</i>
      </ListGroup.Item>
    </>
  );
};

export default RedditPosts;
