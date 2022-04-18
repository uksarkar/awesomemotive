import { IsInt, IsString, Min } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @Min(4)
  public name: string;

  @IsString()
  public body: string;

  @IsInt()
  public postId: number;

  public commentId?: number;
}
