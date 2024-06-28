import { ERoleUser } from "@prisma/client";
import { IsDate, IsEnum, IsString } from 'class-validator';

export class ResUserDto {
	@IsString()
	id: string;

	@IsString()
	fullname: string;

	@IsEnum(ERoleUser)
	role: ERoleUser;

	@IsString()
	login: string;

	@IsString()
	password: string;

	@IsString()
	phone: string;

	@IsDate()
	createdAt?: Date;

	@IsDate()
	updatedAt?: Date;

	@IsDate()
	deleteAt?: Date;
}
