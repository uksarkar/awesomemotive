import IPostListStore from "../../interfaces/IPostListStore";

const initialListData: IPostListStore = {
  loadingPosts: false,
  currentPage: 0,
  totalPage: 0,
  posts: [],
};

export default initialListData;
