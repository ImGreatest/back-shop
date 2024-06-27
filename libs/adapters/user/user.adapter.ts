import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../domains/user/repositories/user.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqCreateUserDto } from "../../domains/user/dto/req-dto/req-create-user.dto";
import { ResUserDto } from "../../domains/user/dto/res-dto/res-user.dto";
import { ReqUpdateUserDto } from "../../domains/user/dto/req-dto/req-update-user.dto";
import { CryptoService } from "../../services/crypto/crypto.service";

@Injectable()
export class UserAdapter extends UserRepository {
    constructor(
      private prisma: PrismaService,
      private cryptoService: CryptoService,
    ) {
        super();
    }

    async createUser(data: ReqCreateUserDto): Promise<void> {
        await this.prisma.user.create({
            data: {
                ...data,
                password: this.cryptoService.getHash(data.password),
            }
        });
    }

    async getUser(user_id: string): Promise<ResUserDto> {
        return this.prisma.user.findUnique({
            where: {
                id: user_id
            }
        });
    }

    async getUsers(): Promise<ResUserDto[]> {
        return this.prisma.user.findMany();
    }

    async updateUser(user_id: string, data: ReqUpdateUserDto): Promise<void> {
        await this.prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                ...data,
                password: this.cryptoService.getHash(data.password),
            },
        });
    }

    async deleteUser(user_id: string): Promise<void> {
        await this.prisma.user.delete({
            where: {
                id: user_id,
            }
        });
    }
}
