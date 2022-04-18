import IPost from "./IPost";

export default interface IPostListStore {
  loadingPosts: boolean;
  currentPage: number;
  totalPage: number;
  posts: IPost[];
}
