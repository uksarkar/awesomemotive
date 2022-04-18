import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddComment from "../../components/AddComment";
import ViewComments from "../../components/ViewComments";
import IPost from "../../interfaces/IPost";

const ViewPost = () => {
  const params = useParams(),
    navigate = useNavigate();

  const goBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    window.scroll(0, 0);
  });

  let post: IPost = {
    title: "This is post title",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut aspernatur delectus debitis atque quibusdam, laborum nesciunt modi architecto perspiciatis illo cum, placeat quos sequi accusamus veritatis ducimus non magnam?",
    created_at: new Date().toUTCString(),
    comments: [
      {
        name: "Utpal Sarkar",
        comment: "Hello, I don't like that",
        created_at: new Date().toUTCString(),
        replays: [
          {
            name: "Utpal Sarkar",
            comment: "Hello, I don't even like that",
            created_at: new Date().toUTCString(),
            replays: [
              {
                name: "Utpal Sarkar",
                comment: "Hello, I don't even like that",
                created_at: new Date().toUTCString(),
              },
              {
                name: "Utpal Sarkar",
                comment: "Hello, I don't even like that",
                created_at: new Date().toUTCString(),
              },
              {
                name: "Utpal Sarkar",
                comment: "Hello, I don't even like that",
                created_at: new Date().toUTCString(),
              },
            ],
          },
          {
            name: "Utpal Sarkar",
            comment: "Hello, I don't even like that",
            created_at: new Date().toUTCString(),
          },
          {
            name: "Utpal Sarkar",
            comment: "Hello, I don't even like that",
            created_at: new Date().toUTCString(),
            replays: [
              {
                name: "Utpal Sarkar",
                comment: "Hello, I don't even like that",
                created_at: new Date().toUTCString(),
              },
              {
                name: "Utpal Sarkar",
                comment: "Hello, I don't even like that",
                created_at: new Date().toUTCString(),
              },
              {
                name: "Utpal Sarkar",
                comment: "Hello, I don't even like that",
                created_at: new Date().toUTCString(),
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="block has-text-centered">
        <a href="/" onClick={goBack} className="button is-link is-light">
          Back
        </a>
      </div>
      <div className="block box">
        <h1 className="title is-4">{post.title}</h1>
        <p className="subtitle is-5">{post.created_at}</p>
        <p className="block">{post.content}</p>
      </div>
      <AddComment />
      <ViewComments comments={post.comments} postId={1} />
    </React.Fragment>
  );
};

export default ViewPost;
