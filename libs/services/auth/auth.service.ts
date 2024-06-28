import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CryptoService } from "../crypto/crypto.service";
import { ReqSignInDto } from "./dto/req-sign-in.dto";
import { ERoleUser, User } from "@prisma/client";
import { UserService } from "../../domains/user/user.service";

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private cryptoService: CryptoService,
		private userService: UserService,
	) {}

	async signIn(data: ReqSignInDto): Promise<User> {
		const user = await this.prisma.user.findFirst({
			where: {
				login: data.login,
			},
		});

		if (!user || !this.cryptoService.compareHash(data.password, user.password)) {
			throw new Error('User not found!');
		}

		return user;
	}

	async signUp(data: ReqSignInDto): Promise<void> {
		return await this.userService.createUser({
			fullname: '',
			role: ERoleUser.client,
			login: data.login,
			password: this.cryptoService.getHash(data.password),
			phone: '',
		});
	}
}