import IComment from "./IComment";

export default interface IPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  comments?: IComment[];
}
