import { IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ReqUpdateBucketDto {
	@ApiProperty({ example: 1 })
	@IsNumber()
	count: number;
}
