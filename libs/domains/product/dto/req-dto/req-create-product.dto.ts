import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ReqCreateProductDto {
	@ApiProperty({ example: 'testName' })
	@IsString()
	name: string;

	@ApiProperty({ example: 'desc' })
	@IsString()
	description: string;

	@ApiProperty({ example: 1 })
	@IsNumber()
	price: number;

	@ApiProperty({ example: 1 })
	@IsNumber()
	count: number;
}
