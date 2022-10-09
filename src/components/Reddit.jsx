import React, { useEffect, useState } from "react";
import { Comment as RedditSpinner } from "react-loader-spinner";
import RedditPosts from "./RedditPosts";

const Reddit = () => {
  const REDDIT_THREAD_URL = "https://www.reddit.com/r/reactjs.json";

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);

      const rawResults = await fetch(REDDIT_THREAD_URL);
      const {
        data: { children: jsonResults },
      } = await rawResults.json();

      {
        /* Since we only have one argument here, we can omit parentheses */
      }
      setPosts(jsonResults.map((obj) => obj.data));
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Reddit /r/reactjs</h1>

      {isLoading ? (
        <RedditSpinner height="80" width="80" ariaLabel="comment-loading" />
      ) : (
        <RedditPosts posts={posts} />
      )}
    </>
  );
};

export default Reddit;
