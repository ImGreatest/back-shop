import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class ReqChangeAbleDto {
	@ApiProperty({ example: false })
	@IsBoolean()
	availability: boolean;
}
