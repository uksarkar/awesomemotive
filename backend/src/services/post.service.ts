import { CreatePostDto } from "@/dtos/post.dto";
import { HttpException } from "@/exceptions/HttpException";
import { Post, PrismaClient } from "@prisma/client";
import { isEmpty } from "class-validator";

export default class PostService {
    public posts = new PrismaClient().post;

  public async findAllPost(offset?: number, limit?: number): Promise<{posts: Post[], total: number}> {
    const posts = await this.posts.findMany({take: limit || 20, skip: offset || 0, orderBy: {createdAt: "desc"}});
    const total = await this.posts.count();
    return {posts, total: Math.ceil(total / (limit || 20))}
  }

  public async findPostById(postId: number): Promise<Post> {
    if (isEmpty(postId)) throw new HttpException(400, "Post id is required.");

    const findPost: Post = await this.posts.findUnique({ where: { id: postId } });
    if (!findPost) throw new HttpException(404, "Post not found.");

    return findPost;
  }

  public async createPost(postData: CreatePostDto): Promise<Post> {
    if (isEmpty(postData)) throw new HttpException(400, "Please provide valid data.");
    return this.posts.create({ data: postData });
  }
}