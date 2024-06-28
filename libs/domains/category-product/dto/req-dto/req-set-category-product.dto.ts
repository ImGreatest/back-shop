import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ReqSetCategoryProductDto {
	@ApiProperty({ example: '1' })
	@IsString()
	categoryId: string;

	@ApiProperty({ example: '1' })
	@IsString()
	productId: string;
}
