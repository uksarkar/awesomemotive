import { CreatePostDto } from '@/dtos/post.dto';
import PostService from '@/services/post.service';
import { Post } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

class PostController {
  /**
   * @var PostService
   */
  private postService = new PostService();

  /**
   * Get all posts
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public index = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const page: number = Number(req.query.page) || 1,
            limit: number = 20,
            offset = ((Number.isNaN(page) ? 1:page) - 1) * limit;

      const data = await this.postService.findAllPost(offset, limit);

      res.status(200).json({ data, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Show single post
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public show = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const postId = Number(req.params.id);
      const post: Post = await this.postService.findPostById(postId);

      res.status(200).json({ data: post, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Store post to database
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public store = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const postData: CreatePostDto = req.body;
      const post: Post = await this.postService.createPost(postData);

      res.status(200).json({ data: post, message: 'Post created successfully.' });
    } catch (error) {
      next(error);
    }
  };
}

export default PostController;
