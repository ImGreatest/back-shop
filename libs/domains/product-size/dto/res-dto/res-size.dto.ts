import { IsBoolean, IsString } from "class-validator";

export class ResProductSize {
	@IsString()
	productId: string;

	@IsString()
	sizeId: string;

	@IsBoolean()
	availability: boolean;
}
