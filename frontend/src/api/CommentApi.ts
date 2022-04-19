import IComment from "../interfaces/IComment";
import BaseApi from "./BaseApi";

export default abstract class CommentApi {
  static async getComments(
    postId: number,
    commentId: number | null = null
  ): Promise<IComment[]> {
    const req = await BaseApi.handleGetRequest<{ data: IComment[] }>(
      `/api/posts/${postId}/comments?of=${commentId}`
    );
    return req?.data || [];
  }

  static async createComment(
    commentData: { name: string; body: string; commentId?: number },
    postId: number
  ): Promise<IComment | null> {
    const req = await BaseApi.handlePostRequest<{ data: IComment }, any>(
      `/api/posts/${postId}/comments`,
      commentData
    );
    return req?.data || null;
  }
}
