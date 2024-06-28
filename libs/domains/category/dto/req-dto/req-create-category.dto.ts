import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ReqCreateCategoryDto {
	@ApiProperty({ example: 'обувь' })
	@IsString()
	name: string;
}
