import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import ICreatedPostStore from "../../interfaces/ICreatePostStore";
import initialData from "./initialData";
import reducers from "./reducers";

const createPostSlice: Slice<
  ICreatedPostStore,
  SliceCaseReducers<ICreatedPostStore>,
  "create_post_store"
> = createSlice({
  name: "create_post_store",
  initialState: initialData,
  reducers,
});

export default createPostSlice.reducer;
export const actions = createPostSlice.actions;
