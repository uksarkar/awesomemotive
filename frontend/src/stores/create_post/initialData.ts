import ICreatedPostStore from "../../interfaces/ICreatePostStore";

const initialData: ICreatedPostStore = {
  title: "",
  titleError: "",
  content: "",
  contentError: "",
  isLoading: false,
};

export default initialData;
