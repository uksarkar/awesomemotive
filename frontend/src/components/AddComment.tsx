import iziToast from "izitoast";
import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentApi from "../api/CommentApi";
import IAddCommentStore from "../interfaces/IAddCommentStore";
import IComment from "../interfaces/IComment";
import IRootStore from "../interfaces/IRootStore";
import { actions as addCommentActions } from "../stores/add_comment/addCommentSlice";

const AddComment = ({
  onComment,
}: {
  onComment: (comment: IComment) => void;
}) => {
  const dispatch = useDispatch(),
    params = useParams();

  const addCommentStore: IAddCommentStore = useSelector(
    (state: IRootStore) => state.addCommentStore
  );

  const isValidForm: boolean = useSelector<IRootStore, boolean>(
    (state: IRootStore) =>
      !!state.addCommentStore.content &&
      !state.addCommentStore.contentError &&
      !!state.addCommentStore.name &&
      !state.addCommentStore.nameError
  );

  const createPost = (e: FormEvent) => {
    e.preventDefault();

    if (!isValidForm) return;

    dispatch(addCommentActions.setLoading(true));
    const postId = Number(params.id);

    /// make server request
    if (!Number.isNaN(postId))
      CommentApi.createComment(
        {
          name: addCommentStore.name,
          body: addCommentStore.content,
        },
        postId
      )
        .then((r) => {
          if (r) {
            dispatch(addCommentActions.resetForm(null));
            iziToast.success({
              title: "Created",
              message: "Comment added successfully.",
            });
            onComment(r);
          }
        })
        .finally(() => {
          dispatch(addCommentActions.setLoading(false));
        });
  };

  return (
    <form
      onReset={(e) => {
        e.preventDefault();
        dispatch(addCommentActions.resetForm(""));
      }}
      onSubmit={createPost}
      className="box block"
    >
      <h4 className="block title is-4">Add Comment</h4>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className={addCommentStore.nameError ? "input is-danger" : "input"}
            type="text"
            value={addCommentStore.name}
            onInput={(e: FormEvent<HTMLInputElement>) => {
              dispatch(
                addCommentActions.setName((e.target as HTMLInputElement).value)
              );
            }}
            placeholder="Name"
          />
        </div>
        <p className="help is-danger">{addCommentStore.nameError}</p>
      </div>

      <div className="field">
        <label className="label">Content</label>
        <div className="control">
          <textarea
            className={
              addCommentStore.contentError ? "textarea is-danger" : "textarea"
            }
            placeholder="Comment"
            value={addCommentStore.content}
            onChange={(e: FormEvent<HTMLTextAreaElement>) => {
              dispatch(
                addCommentActions.setContent(
                  (e.target as HTMLInputElement).value
                )
              );
            }}
          ></textarea>
        </div>
        <p className="help is-danger">{addCommentStore.contentError}</p>
      </div>
      <button
        disabled={!isValidForm || addCommentStore.isLoading}
        className={
          addCommentStore.isLoading
            ? "button is-link is-loading"
            : "button is-link"
        }
      >
        Save
      </button>
      <button
        disabled={addCommentStore.isLoading}
        type="reset"
        className="button is-danger is-light ml-1"
      >
        Reset
      </button>
    </form>
  );
};

export default AddComment;
