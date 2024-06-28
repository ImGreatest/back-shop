import { IsString } from "class-validator";

export class ResCategoryProductDto {
	@IsString()
	categoryId: string;

	@IsString()
	productId: string;
}
