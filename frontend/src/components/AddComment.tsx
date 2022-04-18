import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import IAddCommentStore from "../interfaces/IAddCommentStore";
import IRootStore from "../interfaces/IRootStore";
import { actions as addCommentActions } from "../stores/add_comment/addCommentSlice";

const AddComment = () => {
  const dispatch = useDispatch();

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

    /// make server request
    setTimeout(() => {
      dispatch(addCommentActions.setLoading(false));
      dispatch(addCommentActions.resetForm(null));
    }, 3000);
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
