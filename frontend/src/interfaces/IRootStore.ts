import IAddCommentStore from "./IAddCommentStore";
import ICreatedPostStore from "./ICreatePostStore";
import IPostListStore from "./IPostListStore";

export default interface IRootStore {
  createPostStore: ICreatedPostStore;
  addCommentStore: IAddCommentStore;
  postListStore: IPostListStore;
}
