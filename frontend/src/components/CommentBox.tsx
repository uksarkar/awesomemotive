import { useState } from "react";
import IComment from "../interfaces/IComment";
import AddReplay from "./AddReplay";

const CommentBox = ({
  comment,
  isReplay = false,
}: {
  comment: IComment;
  isReplay?: boolean;
}) => {
  const [showAddReplay, setAddReplay] = useState(false);

  const toggleAddReplay = () => setAddReplay((a) => !a);

  return (
    <div className={isReplay ? "block ml-4" : "block"}>
      <div className="box">
        <h3 className="title is-5 mb-0">{comment.name}</h3>
        <time className="is-small">{comment.created_at}</time>
        <p>{comment.comment}</p>
        <div className="mt-4">
          {showAddReplay ? (
            <AddReplay postId={5} onCancel={toggleAddReplay}></AddReplay>
          ) : (
            <a
              onClick={(e) => {
                e.preventDefault();
                toggleAddReplay();
              }}
              href="?replay"
            >
              Replay
            </a>
          )}
        </div>
      </div>
      {(comment.replays || []).map((r, i) => (
        <CommentBox comment={r} isReplay></CommentBox>
      ))}
    </div>
  );
};

export default CommentBox;
