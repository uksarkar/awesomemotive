import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import PostController from '@/controllers/post.controller';

class PostRoute implements Routes {
  public path = '/api/posts';
  public router = Router();
  public postController = new PostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.postController.index)
      .post(`${this.path}`, this.postController.store)
      .get(`${this.path}/:id`, this.postController.show);
  }
}

export default PostRoute;
