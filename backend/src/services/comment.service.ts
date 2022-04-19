import { CreateCommentDto } from "@/dtos/comment.dto";
import { HttpException } from "@/exceptions/HttpException";
import { isEmpty } from "@/utils/util";
import { Comment, PrismaClient } from "@prisma/client";

export default class CommentService {
    public prisma = new PrismaClient();

    public getComments = async (postId: number, commentId?: number): Promise<Comment[]> => {
        if(isEmpty(postId)) throw new HttpException(400, "Post id is required.");
        let comments = await this.prisma.comment.findMany({where: {postId, commentId: commentId || null}, orderBy: {createdAt: "desc"}, include: {_count: {select:{replays: true}}}});
        const r_comments = comments.map(async c => c._count.replays > 0 ? {...c, replays: await this._loadReplays(c)}:c);
        return Promise.all(r_comments);
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

    private async _loadReplays(comment: Comment): Promise<Comment[]>{
        let replays = await this.prisma.comment.findMany({where: {commentId: comment.id}, orderBy: {createdAt: "desc"},  include: {_count: {select:{replays: true}}}});
        let r_replays = replays.map(async r => {
            return r._count.replays > 0 ? {...r, replays: await this._loadReplays(r)}:r;
        });
        return Promise.all(r_replays);
    }
}