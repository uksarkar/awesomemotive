import React, { useEffect, useState } from "react";
import CommentApi from "../api/CommentApi";
import IComment from "../interfaces/IComment";
import AddComment from "./AddComment";
import CommentBox from "./CommentBox";

const ViewComments = ({
  comments = [],
  postId,
}: {
  comments?: IComment[];
  postId: number;
}) => {
  const [commentState, setComments] = useState([...comments]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CommentApi.getComments(postId)
      .then((r) => {
        if (r.length > 0) setComments((pre) => [...pre, ...r]);
      })
      .finally(() => {
        setLoading((p) => false);
      });
  }, []);

  return (
    <React.Fragment>
      <AddComment
        onComment={(comment) => setComments((pre) => [comment, ...pre])}
      />
      <div className="block mb-4">
        {loading ? (
          <div className="box">
            <div className="is-loading"></div>
          </div>
        ) : (
          commentState.map((c, i) => <CommentBox key={i} comment={c} />)
        )}
      </div>
    </React.Fragment>
  );
};

export default ViewComments;
