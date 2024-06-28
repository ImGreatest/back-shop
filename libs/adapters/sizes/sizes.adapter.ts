import { Injectable } from "@nestjs/common";
import { SizesRepository } from "../../domains/sizes/repository/sizes.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqCreateSizeDto } from "../../domains/sizes/dto/req-dto/req-create-size.dto";
import { ResSizeDto } from "../../domains/sizes/dto/res-dto/res-size.dto";
import { ReqUpdateSizeDto } from "../../domains/sizes/dto/req-dto/req-update-size.dto";

@Injectable()
export class SizesAdapter extends SizesRepository {
	constructor(private prisma: PrismaService) {
		super();
	}

	async createSize(data: ReqCreateSizeDto): Promise<void> {
		await this.prisma.sizes.create({
			data: { ...data },
		});
	}

	async getSize(id: string): Promise<ResSizeDto> {
		return this.prisma.sizes.findUnique({
			where: {
				id: id,
			},
		});
	}

	async getSizeByName(name: string): Promise<ResSizeDto[]> {
		return this.prisma.sizes.findMany({
			where: {
				name: name,
			},
		});
	}

	async getSizes(): Promise<ResSizeDto[]> {
		return this.prisma.sizes.findMany();
	}

	async updateSize(id: string, data: ReqUpdateSizeDto): Promise<void> {
		await this.prisma.sizes.update({
			where: {
				id: id,
			},
			data: { ...data },
		});
	}

	async deleteSize(id: string): Promise<void> {
		await this.prisma.sizes.delete({
			where: {
				id: id,
			},
		});
	}
}
