import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ReqSignInDto {
	@ApiProperty({ example: 'user123' })
	@IsString()
	login: string;

	@ApiProperty({ example: 'password' })
	@IsString()
	password: string;
}