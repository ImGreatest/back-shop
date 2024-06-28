import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ReqAddBucketDto {
	@ApiProperty({ example: 1 })
	@IsString()
	userId: string;

	@ApiProperty({ example: 1 })
	@IsString()
	productId: string;

	@ApiProperty({ example: 1 })
	@IsNumber()
	count: number;
}
