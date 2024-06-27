import { Injectable, NotFoundException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from "../../prisma/prisma.service";
import { config } from "../../../../config/config";
import { IPayload } from "../payload.interface";
import { ResUserDto } from "../../../domains/user/dto/res-dto/res-user.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private prisma: PrismaService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: config.JwtSecret,
		});
	}

	async validate(payload: IPayload): Promise<ResUserDto> {
		const user = await this.prisma.user.findUnique({
			where: {
				id: payload.sub,
			}
		});

		if (!user) {
			throw new NotFoundException('User not found!');
		}

		return user;
	}
}
