import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import IPostListStore from "../../interfaces/IPostListStore";
import initialListData from "./initialListData";
import listReducers from "./listReducer";

const createPostListSlice: Slice<
  IPostListStore,
  SliceCaseReducers<IPostListStore>,
  "create_post_store"
> = createSlice({
  name: "create_post_store",
  initialState: initialListData,
  reducers: listReducers,
});

export default createPostListSlice.reducer;
export const actions = createPostListSlice.actions;
