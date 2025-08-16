import { IsString, MinLength } from "class-validator";

export class CreateLinkDto {
  @IsString()
  @MinLength(5)
  originalUrl: string;
}
