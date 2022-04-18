export default interface IAddCommentStore {
  name: string;
  content: string;
  nameError: string;
  contentError: string;
  isLoading: boolean;
}
