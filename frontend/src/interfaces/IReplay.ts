import IComment from "./IComment";

export default interface IReplay extends IComment {
  replays?: IReplay[];
}
