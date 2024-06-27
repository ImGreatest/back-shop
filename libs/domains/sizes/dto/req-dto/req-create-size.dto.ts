import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ReqCreateSizeDto {
	@ApiProperty({ example: 'm' })
	@IsString()
	name: string;
}
