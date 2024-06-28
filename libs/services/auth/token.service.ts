// import { Injectable } from "@nestjs/common";
// import { JwtService } from '@nestjs/jwt';
// import { PrismaService } from "../prisma/prisma.service";
// import { UserService } from "../../domains/user/user.service";
// import { IPayload } from "./payload.interface";
// import { config } from "../../../config/config";
// import { randomBytes } from 'crypto';
// import { Request } from 'express';
// import { DateTime } from 'luxon';
// import { ResUserDto } from "../../domains/user/dto/res-dto/res-user.dto";
//
// @Injectable()
// export class AuthTokenService {
// 	constructor(
// 		private prisma: PrismaService,
// 		private jwtService: JwtService,
// 		private userService: UserService,
// 	) {}
//
// 	generateJwt(payload: IPayload) {
// 		return this.jwtService.sign(payload, {
// 			secret: config.JwtSecret,
// 			expiresIn: config.JwtExpiresIn,
// 		});
// 	}
//
// 	async generateRefreshToken(userId: string, deviceId: string): Promise<string> {
// 		const token = await this.prisma.refreshToken.create({
// 			data: {
// 				token: randomBytes(config.RefreshLength).toString('hex'),
// 				deviceId: deviceId,
// 				userId: userId,
// 				expires_at: DateTime.now().plus({ month: 1 }).toJSDate(),
// 			}
// 		});
//
// 		return token.token;
// 	}
//
// 	async refresh(data: ReqRefreshDto): Promise<ResSignInDto> {
// 		const oldRefresh = await this.prisma.refreshToken.findUnique({
//       where: {
//         token_deviceId: {
//           token: data.token,
//           deviceId: data.deviceId,
//         },
//       },
//     });
// 		const roleUser: ResUserDto = await this.userService.getUser(oldRefresh.userId);
//
//     if (!oldRefresh || !roleUser) {
//       throw new Error('Ошибка авторизации');
//     }
//
// 		this.prisma.refreshToken.delete({
//       where: {
//         token_deviceId: {
//           token: data.token,
//           deviceId: data.deviceId,
//         },
//       },
//     });
//     const accessPayload: IPayload = {
//       sub: oldRefresh.userId,
//       role: role.id,
//     };
// 		const access: string = this.generateJwt(accessPayload);
//     const refresh: string = await this.generateRefreshToken(
//       oldRefresh.userId,
//       oldRefresh.deviceId,
//     );
//
// 		return {
//       access: access,
//       refresh: refresh,
//       id: roleUser.id,
//     };
// 	}
// }