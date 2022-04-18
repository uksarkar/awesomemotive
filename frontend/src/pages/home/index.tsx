import React, { useEffect } from "react";
import CreatePost from "../../components/CreatePost";
import PostList from "../../components/PostList";

const Home = () => {
  useEffect(() => {
    document.title = "Home Page";
  });
  return (
    <React.Fragment>
      <CreatePost></CreatePost>
      <PostList></PostList>
    </React.Fragment>
  );
};

export default Home;
