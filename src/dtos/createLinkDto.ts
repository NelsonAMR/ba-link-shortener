import { IsString, IsUrl, IsUUID, MinLength } from "class-validator";

export class CreateLinkDto {
  @IsString()
  @MinLength(6)
  @IsUrl()
  originalLink: string;

  @IsString()
  @IsUUID()
  @MinLength(6)
  userId: string;
}
