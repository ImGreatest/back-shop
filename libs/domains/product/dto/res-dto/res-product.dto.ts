import { IsDate, IsNumber, IsString } from "class-validator";

export class ResProductDto {
	@IsString()
	id: string;

	@IsString()
	name: string;

	@IsString()
	description: string;

	@IsNumber()
	price: number;

	@IsNumber()
	count: number;

	@IsDate()
	createdAt: Date;

	@IsDate()
	updatedAt: Date;

	@IsDate()
	deletedAt: Date;
}
