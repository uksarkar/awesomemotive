import { Comment } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import CommentService from '@services/comment.service';
import { CreateCommentDto } from '@/dtos/comment.dto';


class CommentController {
  /**
   * @var CommentService
   */
  private commentService = new CommentService();

  /**
   * Show comments by post id
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public show = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const postId = Number(req.params.postId),
            commentId = req.query.of && req.query.of !== "null" ? Number(req.query.of):undefined;
      const findAllComments: Comment[] = await this.commentService.getComments(postId, commentId);

      res.status(200).json({ data: findAllComments, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  
  /**
   * Store new comment to database
   * @param req Request
   * @param res Response
   * @param next NextFunction
   */
  public store = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const commentData: CreateCommentDto = {...req.body, postId: Number(req.params.postId)};
      const comment: Comment = await this.commentService.createComment(commentData);

      res.status(200).json({ data: comment, message: 'Comment created successfully.' });
    } catch (error) {
      next(error);
    }
  };
}

export default CommentController;
