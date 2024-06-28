import { Injectable } from "@nestjs/common";
import { ProductSizeRepository } from "../../domains/product-size/repository/product-size.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqSetSizeDto } from "../../domains/product-size/dto/req-dto/req-set-size.dto";
import { ResProductSize } from "../../domains/product-size/dto/res-dto/res-size.dto";
import { ReqChangeAbleDto } from "../../domains/product-size/dto/req-dto/req-change-able.dto";

@Injectable()
export class ProductSizeAdapter extends ProductSizeRepository {
	constructor(private prisma: PrismaService) {
		super();
	}

	async setSize(data: ReqSetSizeDto): Promise<void> {
		await this.prisma.productSize.create({
			data: { ...data },
		});
	}

	async getSize(productId: string, sizeId: string): Promise<ResProductSize> {
		return this.prisma.productSize.findUnique({
			where: {
				productId_sizeId: {
					productId: productId,
					sizeId: sizeId,
				},
			},
		});
	}

	async getSizesProduct(productId: string): Promise<ResProductSize[]> {
		return this.prisma.productSize.findMany({
			where: {
				productId: productId,
			},
		});
	}

	async updateSize(productId: string, sizeId: string, data: ReqChangeAbleDto): Promise<void> {
		await this.prisma.productSize.update({
			where: {
				productId_sizeId: {
					productId: productId,
					sizeId: sizeId,
				},
			},
			data: {
				availability: data.availability,
			},
		});
	}

	async deleteSize(productId: string, sizeId: string): Promise<void> {
		await this.prisma.productSize.delete({
			where: {
				productId_sizeId: {
					productId: productId,
					sizeId: sizeId,
				},
			},
		});
	}
}