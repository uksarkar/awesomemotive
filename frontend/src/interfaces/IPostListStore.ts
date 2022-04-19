import IPost from "./IPost";

export default interface IPostListStore {
  loadingPosts: boolean;
  totalPage: number;
  posts: IPost[];
}
