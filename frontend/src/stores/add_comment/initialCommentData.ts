import IAddCommentStore from "../../interfaces/IAddCommentStore";

const initialData: IAddCommentStore = {
  name: "",
  nameError: "",
  content: "",
  contentError: "",
  isLoading: false,
};

export default initialData;
