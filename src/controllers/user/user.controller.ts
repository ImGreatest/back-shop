import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { UserService } from "../../../libs/domains/user/user.service";
import { ReqCreateUserDto } from "../../../libs/domains/user/dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../../../libs/domains/user/dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../../../libs/domains/user/dto/req-dto/req-update-user.dto";

@ApiTags('user')
@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Post('create-user')
	@ApiBody({ type: ReqCreateUserDto })
	createUser(@Body() data: ReqCreateUserDto): Promise<void> {
		return this.userService.createUser(data);
	}

	@Get('get-user/:id')
	getUser(@Param('id') user_id: string): Promise<ResUserDto> {
		return this.userService.getUser(user_id);
	}

	@Get('get-users')
	getUsers(): Promise<ResUserDto[]> {
		return this.userService.getUsers();
	}

	@Put('update-user/:id')
	@ApiBody({ type: ReqUpdateUserDto })
	updateUser(
		@Param('id') user_id: string,
		@Body() data: ReqUpdateUserDto
	): Promise<void> {
		return this.userService.updateUser(user_id, data);
	}

	@Delete('delete-user/:id')
	deleteUser(@Param('id') user_id: string): Promise<void> {
		return this.userService.deleteUser(user_id)
	}
}
