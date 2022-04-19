import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostApi from "../../api/PostApi";
import ViewComments from "../../components/ViewComments";
import IComment from "../../interfaces/IComment";
import IPost from "../../interfaces/IPost";

const ViewPost = () => {
  const params = useParams(),
    navigate = useNavigate();

  const goBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate(-1);
  };

  const [postState, setState] = useState<{
    post: IPost | null;
    loading: boolean;
    comments: IComment[];
  }>({
    post: null,
    loading: true,
    comments: [],
  });

  useEffect(() => {
    window.scroll(0, 0);
    getPost();
  }, []);

  const getPost = () => {
    PostApi.viewPost(Number(params.id))
      .then((r) => {
        if (r) setState((pre) => ({ ...pre, post: r }));
      })
      .finally(() => {
        setState((pre) => ({ ...pre, loading: false }));
      });
  };

  return (
    <React.Fragment>
      <div className="block has-text-centered">
        <a href="/" onClick={goBack} className="button is-link is-light">
          Back
        </a>
      </div>
      {postState.loading ? (
        <div className="block box">
          <div className="is-loading"></div>
          Loading...
        </div>
      ) : !postState.post ? (
        <div className="block box">Post Not Found.</div>
      ) : (
        <React.Fragment>
          <div className="block box">
            <h1 className="title is-4">{postState.post.title}</h1>
            <p className="subtitle is-5">
              {new Date(postState.post.createdAt).toUTCString()}
            </p>
            <p className="block">{postState.post.content}</p>
          </div>
          <ViewComments postId={postState.post.id} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ViewPost;
