import { ERoleUser } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";

export class ReqCreateUserDto {
	@ApiProperty({ example: 'name' })
	@IsString()
	fullname: string;

	@ApiProperty({ example: ERoleUser.client })
	@IsEnum(ERoleUser)
	role: ERoleUser;

	@ApiProperty({ example: 'login' })
	@IsString()
	login: string;

	@ApiProperty({ example: '123' })
	@IsString()
	password: string;
}
