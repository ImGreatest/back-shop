import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { ReqCreateUserDto } from "./dto/req-dto/req-create-user.dto";
import { ResUserDto } from "./dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "./dto/req-dto/req-update-user.dto";

@Injectable()
export class UserService {
	constructor(private readonly userRep: UserRepository) {}

	createUser(data: ReqCreateUserDto): Promise<void> {
		return this.userRep.createUser(data);
	}

	getUser(user_id: string): Promise<ResUserDto> {
		return this.userRep.getUser(user_id);
	}

	getUsers(): Promise<ResUserDto[]> {
		return this.userRep.getUsers();
	}

	updateUser(user_id: string, data: ReqUpdateUserDto): Promise<void> {
		return this.userRep.updateUser(user_id, data);
	}

	deleteUser(user_id: string): Promise<void> {
		return this.userRep.deleteUser(user_id);
	}
}
