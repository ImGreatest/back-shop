import { IsString } from "class-validator";

export class ResSizeDto {
	@IsString()
	id: string;

	@IsString()
	name: string;
}
