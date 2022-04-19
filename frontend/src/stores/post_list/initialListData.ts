import IPostListStore from "../../interfaces/IPostListStore";

const initialListData: IPostListStore = {
  loadingPosts: false,
  totalPage: 0,
  posts: [],
};

export default initialListData;
