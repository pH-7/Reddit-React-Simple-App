import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Comment as RedditSpinner } from "react-loader-spinner";
import RedditPosts from "./RedditPosts";

const Reddit = () => {
  const REDDIT_THREAD_URL = "https://www.reddit.com/r/reactjs.json";

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);

      const rawResult = await fetch(REDDIT_THREAD_URL);
      const {
        data: { children: jsonResult },
      } = await rawResult.json();

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
      <h1 className="mt-3 mb-5">Reddit /r/reactjs</h1>
      {isLoading ? (
        <RedditSpinner height="80" width="80" ariaLabel="comment-loading" />
      ) : (
        <ListGroup>
          {/* Since we have only one argument here, we can omit the parentheses */}
          {posts.map((post) => (
            <RedditPosts post={post} />
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Reddit;
