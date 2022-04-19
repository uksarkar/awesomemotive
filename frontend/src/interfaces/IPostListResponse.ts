import IPost from "./IPost";

export default interface IPostListResponse {
  total: number;
  posts: IPost[];
}
