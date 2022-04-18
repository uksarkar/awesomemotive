import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import CommentController from '@/controllers/comment.controller';

class CommentRoute implements Routes {
  public path = '/posts/:postId/comments';
  public router = Router();
  public commentController = new CommentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.commentController.show)
        .post(`${this.path}`, this.commentController.store);
  }
}

export default CommentRoute;
