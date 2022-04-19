import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ICreatedPostStore from "../interfaces/ICreatePostStore";
import IRootStore from "../interfaces/IRootStore";
import Modal from "./Modal";
import { actions as createPostActions } from "../stores/create_post/createPostSlice";
import { actions as postListActions } from "../stores/post_list/PostListSlice";
import PostApi from "../api/PostApi";
import iziToast from "izitoast";

const CreatePost = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleCreatePostModal = () => setShowModal((p) => !p);
  const dispatch = useDispatch();

  const createPostStore: ICreatedPostStore = useSelector(
    (state: IRootStore) => state.createPostStore
  );

  const isValidForm: boolean = useSelector<IRootStore, boolean>(
    (state: IRootStore) =>
      !!state.createPostStore.content &&
      !state.createPostStore.contentError &&
      !!state.createPostStore.title &&
      !state.createPostStore.titleError
  );

  const createPost = (e: FormEvent) => {
    e.preventDefault();

    if (!isValidForm) return;

    dispatch(createPostActions.setLoading(true));

    /// make server request
    PostApi.createPost({
      title: createPostStore.title,
      content: createPostStore.content,
    })
      .then((r) => {
        if (r) {
          dispatch(createPostActions.resetForm(null));
          iziToast.success({
            title: "Created",
            message: "Post created successfully.",
          });
          dispatch(postListActions.addPost(r));
          toggleCreatePostModal();
        }
      })
      .finally(() => {
        dispatch(createPostActions.setLoading(false));
      });
  };

  return (
    <React.Fragment>
      <div className="box">
        <h2>Welcome to awesome motive blog</h2>
        <button onClick={toggleCreatePostModal} className="button is-primary">
          Create Post
        </button>
      </div>
      <form
        onReset={(e) => {
          e.preventDefault();
          dispatch(createPostActions.resetForm(""));
        }}
        onSubmit={createPost}
      >
        <Modal
          isActive={showModal}
          header={
            <React.Fragment>
              <p className="modal-card-title">Create Post</p>
              <button
                onClick={toggleCreatePostModal}
                className="delete"
                aria-label="close"
                type="button"
              ></button>
            </React.Fragment>
          }
          footer={
            <React.Fragment>
              <button
                disabled={!isValidForm || createPostStore.isLoading}
                className={
                  createPostStore.isLoading
                    ? "button is-link is-loading"
                    : "button is-link"
                }
              >
                Save
              </button>
              <button
                disabled={createPostStore.isLoading}
                type="reset"
                className="button is-danger is-light"
              >
                Reset
              </button>
            </React.Fragment>
          }
        >
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className={
                  createPostStore.titleError ? "input is-danger" : "input"
                }
                type="text"
                value={createPostStore.title}
                onInput={(e: FormEvent<HTMLInputElement>) => {
                  dispatch(
                    createPostActions.setTitle(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
                placeholder="Type title here...."
              />
            </div>
            <p className="help is-danger">{createPostStore.titleError}</p>
          </div>

          <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <textarea
                className={
                  createPostStore.contentError
                    ? "textarea is-danger"
                    : "textarea"
                }
                placeholder="Type content here..."
                value={createPostStore.content}
                onChange={(e: FormEvent<HTMLTextAreaElement>) => {
                  dispatch(
                    createPostActions.setContent(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
              ></textarea>
            </div>
            <p className="help is-danger">{createPostStore.contentError}</p>
          </div>
        </Modal>
      </form>
    </React.Fragment>
  );
};

export default CreatePost;
