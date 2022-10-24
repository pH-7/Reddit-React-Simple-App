import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Comment as RedditSpinner } from "react-loader-spinner";
import RedditPosts from "./RedditPosts";

const Reddit = ({ subreddit }) => {
  const REDDIT_THREAD_URL = `https://www.reddit.com/r/${subreddit}.json`;

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);

      const rawResult = await fetch(REDDIT_THREAD_URL);
      const {
        data: { children: jsonResult },
      } = await rawResult.json();

      {/* Retrieve only the `data` prop from `obj` of `jsonResult` array */}
      setPosts(jsonResult.map((obj) => obj.data));
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container className="text-center">
      <h1 className="mt-3 mb-5">Reddit /r/{subreddit}</h1>
      {isLoading ? (
        <RedditSpinner height="80" width="80" ariaLabel="comment-loading" />
      ) : (
        <ListGroup>
          {/* Since we only have one argument here, we can omit parentheses */}
          {posts.map((post, index) => (
            <RedditPosts key={post.id} post={post} oddRow={index % 2} />
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Reddit;
