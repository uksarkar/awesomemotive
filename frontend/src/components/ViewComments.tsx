import React from "react";
import IComment from "../interfaces/IComment";
import CommentBox from "./CommentBox";

const ViewComments = ({
  comments = [],
  postId,
}: {
  comments?: IComment[];
  postId: number;
}) => {
  return (
    <div className="block mb-4">
      {comments.map((c, i) => (
        <CommentBox key={i} comment={c} />
      ))}
    </div>
  );
};

export default ViewComments;
