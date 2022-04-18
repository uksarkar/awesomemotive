import React, { FormEvent, useState } from "react";

const AddReplay = ({
  postId,
  onCancel,
}: {
  postId: number;
  onCancel?: () => void;
}) => {
  const [replayForm, setData] = useState({
    name: "",
    nameError: "",
    comment: "",
    commentError: "",
    isLoading: false,
  });

  const setName = (name: string) => {
    setData((pre) => ({
      ...pre,
      name,
      nameError: !name
        ? "Please provide name."
        : name.length < 4
        ? "Please provide at least 4 characters."
        : "",
    }));
  };

  const setComment = (comment: string) => {
    setData((pre) => ({
      ...pre,
      comment,
      commentError: !comment ? "Please type comment." : "",
    }));
  };

  const addReplay = () => {
    // code
  };

  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addReplay();
        }}
        className="block"
      >
        <h4 className="block title is-5">Replay</h4>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className={replayForm.nameError ? "input is-danger" : "input"}
              type="text"
              value={replayForm.name}
              onInput={(e: FormEvent<HTMLInputElement>) => {
                setName((e.target as HTMLInputElement).value);
              }}
              placeholder="Name"
            />
          </div>
          <p className="help is-danger">{replayForm.nameError}</p>
        </div>

        <div className="field">
          <label className="label">Content</label>
          <div className="control">
            <textarea
              className={
                replayForm.commentError ? "textarea is-danger" : "textarea"
              }
              placeholder="Comment"
              value={replayForm.comment}
              onChange={(e: FormEvent<HTMLTextAreaElement>) => {
                setComment((e.target as HTMLInputElement).value);
              }}
            ></textarea>
          </div>
          <p className="help is-danger">{replayForm.commentError}</p>
        </div>
        <button
          disabled={
            !replayForm.comment ||
            !replayForm.name ||
            !!replayForm.commentError ||
            !!replayForm.nameError ||
            replayForm.isLoading
          }
          className={
            replayForm.isLoading
              ? "button is-link is-loading"
              : "button is-link"
          }
        >
          Save
        </button>
        {onCancel && (
          <button
            className="button is-info is-light ml-2"
            type="button"
            onClick={onCancel}
            disabled={replayForm.isLoading}
          >
            Cancel
          </button>
        )}
      </form>
    </React.Fragment>
  );
};

export default AddReplay;
