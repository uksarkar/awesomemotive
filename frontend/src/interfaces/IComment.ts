import IReplay from "./IReplay";

export default interface IComment {
  name: string;
  comment: string;
  created_at: string;
  replays?: IReplay[];
}
