import { IsNumber, IsString } from "class-validator";

export class ResGetCellBucketsDto {
	@IsString()
	userId: string;

	@IsString()
	productId: string;

	@IsNumber()
	count: number;
}
