import ICreatedPostStore from "../../interfaces/ICreatePostStore";
import { PayloadAction } from "@reduxjs/toolkit";

const setTitle = (state: ICreatedPostStore, title: PayloadAction<string>) => {
  state.title = title.payload;
  state.titleError =
    title.payload && title.payload.length >= 4
      ? ""
      : !title.payload
      ? "Please provide title."
      : "Title must be at least 4 characters.";
};

const setContent = (
  state: ICreatedPostStore,
  content: PayloadAction<string>
) => {
  state.content = content.payload;
  state.contentError =
    content.payload && content.payload.split(" ").length >= 4
      ? ""
      : !content.payload
      ? "Please provide content."
      : "Please provide at least 4 words.";
};

const resetForm = (state: ICreatedPostStore) => {
  state.title = "";
  state.titleError = "";
  state.content = "";
  state.contentError = "";
  state.isLoading = false;
};

const setLoading = (
  state: ICreatedPostStore,
  isLoading: PayloadAction<boolean>
) => {
  state.isLoading = isLoading.payload;
};

const reducers = {
  setTitle,
  setContent,
  resetForm,
  setLoading,
};
export default reducers;
