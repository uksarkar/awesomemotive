import { PayloadAction } from "@reduxjs/toolkit";
import IPost from "../../interfaces/IPost";
import IPostListResponse from "../../interfaces/IPostListResponse";
import IPostListStore from "../../interfaces/IPostListStore";

const setResponse = (
  state: IPostListStore,
  posts: PayloadAction<IPostListResponse>
) => {
  state.posts = posts.payload.posts;
  state.totalPage = posts.payload.total;
  state.loadingPosts = false;
};

const addPost = (state: IPostListStore, posts: PayloadAction<IPost>) => {
  state.posts = [posts.payload, ...state.posts];
  state.totalPage++;
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
  addPost,
};

export default listReducers;
