import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../../domains/product/repository/product.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqCreateProductDto } from "../../domains/product/dto/req-dto/req-create-product.dto";
import { ResProductDto } from "../../domains/product/dto/res-dto/res-product.dto";
import { ReqUpdateProductDto } from "../../domains/product/dto/req-dto/req-update-product.dto";

@Injectable()
export class ProductAdapter extends ProductRepository {
	constructor(private prisma: PrismaService) {
		super();
	}

	async createProduct(data: ReqCreateProductDto): Promise<void> {
		await this.prisma.product.create({
			data: { ...data }
		});
	}

	async getProduct(id: string): Promise<ResProductDto> {
		return this.prisma.product.findUnique({
			where: {
				id: id,
			},
		});
	}

	async getProductsByName(name: string): Promise<ResProductDto[]> {
		return this.prisma.product.findMany({
			where: {
				name: name,
			},
		});
	}

	async getProducts(): Promise<ResProductDto[]> {
		return this.prisma.product.findMany();
	}

	async updateProduct(id: string, data: ReqUpdateProductDto): Promise<void> {
		await this.prisma.product.update({
			where: {
				id: id,
			},
			data: { ...data },
		});
	}

	async deleteProduct(id: string): Promise<void> {
		await this.prisma.product.delete({
			where: {
				id: id,
			}
		})
	}
}
