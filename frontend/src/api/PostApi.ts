import IPost from "../interfaces/IPost";
import BaseApi from "./BaseApi";

export default abstract class PostApi {
  static async getPosts(
    page: number
  ): Promise<{ posts: IPost[]; total: number } | null> {
    const req = await BaseApi.handleGetRequest<{
      data: { posts: IPost[]; total: number };
    }>(`/api/posts?page=${page}`);
    return req?.data || null;
  }

  static async viewPost(postId: number): Promise<IPost | null> {
    const req = await BaseApi.handleGetRequest<{ data: IPost }>(
      `/api/posts/${postId}`
    );
    return req?.data || null;
  }

  static async createPost(postData: {
    title: string;
    content: string;
  }): Promise<IPost | null> {
    const req = await BaseApi.handlePostRequest<{ data: IPost }, any>(
      `/api/posts`,
      postData
    );
    return req?.data || null;
  }
}
