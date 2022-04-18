import IComment from "./IComment";

export default interface IPost {
  title: string;
  content: string;
  created_at: string;
  comments?: IComment[];
}
