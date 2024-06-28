import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class ReqSetSizeDto {
	@ApiProperty()
	@IsString()
	sizeId: string;

	@ApiProperty()
	@IsString()
	productId: string;

	@ApiProperty({ example: false })
	@IsBoolean()
	availability: boolean;
}
