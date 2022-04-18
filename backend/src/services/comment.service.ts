import { CreateCommentDto } from "@/dtos/comment.dto";
import { HttpException } from "@/exceptions/HttpException";
import { isEmpty } from "@/utils/util";
import { Comment, PrismaClient } from "@prisma/client";

export default class CommentService {
    public prisma = new PrismaClient();

    public getComments = (postId: number): Promise<Comment[]> => {
        if(isEmpty(postId)) throw new HttpException(400, "Post id is required.");
        return this.prisma.comment.findMany({where: {postId, commentId: null}, include: {replays: true}});
    }

    public createComment = async (commentData: CreateCommentDto): Promise<Comment>  => {
        if(isEmpty(commentData)) throw new HttpException(400, "Comment data is required.");

        const getRelatedPost = await this.prisma.post.findFirst({where: {id: commentData.postId}});
        if(isEmpty(getRelatedPost)) throw new HttpException(404, "Corresponding post not found");

        if(!isEmpty(commentData.commentId)){
            const correspondingComment = await this.prisma.comment.findFirst({where: {id: commentData.commentId}});
            if(isEmpty(correspondingComment)) throw new HttpException(404, "Corresponding comment not found");
        }

        return this.prisma.comment.create({data: commentData});
    }
}