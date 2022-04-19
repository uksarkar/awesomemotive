import IReplay from "./IReplay";

export default interface IComment {
  name: string;
  postId: number;
  id: number;
  commentId?: number;
  body: string;
  createdAt: string;
  replays?: IReplay[];
}
