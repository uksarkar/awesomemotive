import { IsString, Min } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Min(4)
  public title: string;

  @IsString()
  public content: string;
}
