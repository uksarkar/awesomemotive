import { PayloadAction } from "@reduxjs/toolkit";
import IPostListResponse from "../../interfaces/IPostListResponse";
import IPostListStore from "../../interfaces/IPostListStore";

const setResponse = (
  state: IPostListStore,
  posts: PayloadAction<IPostListResponse>
) => {
  state.posts = posts.payload.posts;
  state.totalPage = posts.payload.totalPage;
  state.loadingPosts = false;
};

const setLoading = (
  state: IPostListStore,
  isLoading: PayloadAction<boolean>
) => {
  state.loadingPosts = isLoading.payload;
};

const listReducers = {
  setResponse,
  setLoading,
};

export default listReducers;
