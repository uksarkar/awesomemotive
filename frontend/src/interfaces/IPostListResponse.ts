import IPost from "./IPost";

export default interface IPostListResponse {
  totalPage: number;
  posts: IPost[];
}
