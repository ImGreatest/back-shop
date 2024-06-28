import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../domains/user/repositories/user.repository";
import { ReqCreateUserDto } from "../../domains/user/dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../../domains/user/dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../../domains/user/dto/req-dto/req-update-user.dto";


@Injectable()
export class UserMockAdapter extends UserRepository {
	async createUser(data: ReqCreateUserDto): Promise<void> {
		throw new Error(`${{ ...data }}}`);
	}

	async getUser(user_id: string): Promise<ResUserDto> {
		throw new Error(`${user_id}`);
	}

	async getUsers(): Promise<ResUserDto[]> {
		throw new Error();
	}

	async getUserByLoginPass(login: string, password: string): Promise<ResUserDto> {
		throw new Error(`${login}, ${password}`);
	}

	async updateUser(user_id: string, data: ReqUpdateUserDto): Promise<void> {
		throw new Error(`${user_id}, ${{ ...data }}`);
	}

	async deleteUser(user_id: string): Promise<void> {
		throw new Error(`${user_id}`);
	}
}
