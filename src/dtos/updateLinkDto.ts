import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateLinkDto {
  @IsString()
  @MinLength(5)
  @IsOptional()
  originalUrl: string;
}
