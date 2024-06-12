import { Injectable } from "@nestjs/common";
import { ReqCreateUserDto } from "../dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../dto/req-dto/req-update-user.dto";

@Injectable()
export abstract class UserRepository {
	abstract createUser(data: ReqCreateUserDto): Promise<void>;

	abstract getUser(user_id: string): Promise<ResUserDto>;

	abstract getUsers(): Promise<ResUserDto[]>;

	abstract updateUser(user_id: string, data: ReqUpdateUserDto): Promise<void>;

	abstract deleteUser(user_id: string): Promise<void>;
}
