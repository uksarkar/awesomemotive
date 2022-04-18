import { PayloadAction } from "@reduxjs/toolkit";
import IAddCommentStore from "../../interfaces/IAddCommentStore";

const setName = (state: IAddCommentStore, name: PayloadAction<string>) => {
  state.name = name.payload;
  state.nameError =
    name.payload && name.payload.length >= 4
      ? ""
      : !name.payload
      ? "Please provide name."
      : "Name must be at least 4 characters.";
};

const setContent = (
  state: IAddCommentStore,
  content: PayloadAction<string>
) => {
  state.content = content.payload;
  state.contentError = !content.payload ? "Please provide content." : "";
};

const resetForm = (state: IAddCommentStore) => {
  state.name = "";
  state.nameError = "";
  state.content = "";
  state.contentError = "";
  state.isLoading = false;
};

const setLoading = (
  state: IAddCommentStore,
  isLoading: PayloadAction<boolean>
) => {
  state.isLoading = isLoading.payload;
};

const reducers = {
  setName,
  setContent,
  resetForm,
  setLoading,
};
export default reducers;
