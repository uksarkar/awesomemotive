import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import IAddCommentStore from "../../interfaces/IAddCommentStore";
import initialCommentData from "./initialCommentData";
import reducers from "./addCommentReducers";

const addCommentSlice: Slice<
  IAddCommentStore,
  SliceCaseReducers<IAddCommentStore>,
  "create_post_store"
> = createSlice({
  name: "create_post_store",
  initialState: initialCommentData,
  reducers,
});

export default addCommentSlice.reducer;
export const actions = addCommentSlice.actions;
