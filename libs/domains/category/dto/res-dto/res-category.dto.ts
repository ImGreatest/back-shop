import { IsString } from "class-validator";

export class ResCategoryDto {
	@IsString()
	id: string;

	@IsString()
	name: string;
}
