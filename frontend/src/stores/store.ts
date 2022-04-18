import { configureStore } from "@reduxjs/toolkit";
import IRootStore from "../interfaces/IRootStore";
import createPostStore from "./create_post/createPostSlice";
import addCommentStore from "./add_comment/addCommentSlice";
import postListStore from "./post_list/PostListSlice";

const store = configureStore<IRootStore>({
  reducer: { createPostStore, addCommentStore, postListStore },
});

export default store;
