import { Injectable } from "@nestjs/common";
import { CategoryProductRepository } from "../../domains/category-product/repository/category-product.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqSetCategoryProductDto } from "../../domains/category-product/dto/req-dto/req-set-category-product.dto";
import { ResCategoryProductDto } from "../../domains/category-product/dto/res-dto/res-category-product.dto";

@Injectable()
export class CategoryProductAdapter extends CategoryProductRepository {
	constructor(private prisma: PrismaService) {
		super();
	}

	async setCategoryProduct(data: ReqSetCategoryProductDto): Promise<void> {
		await this.prisma.categoryProduct.create({
			data: {
				categoryId: data.categoryId,
				productId: data.productId,
			}
		});
	}

	async getByCategory(id: string): Promise<ResCategoryProductDto[]> {
		return this.prisma.categoryProduct.findMany({
			where: {
				categoryId: id,
			}
		});
	}

	async getByProduct(id: string): Promise<ResCategoryProductDto[]> {
		return this.prisma.categoryProduct.findMany({
			where: {
				productId: id,
			},
		});
	}

	async getAll(): Promise<ResCategoryProductDto[]> {
		return this.prisma.categoryProduct.findMany();
	}

	async unSetCategoryProduct(categoryId: string, productId: string): Promise<void> {
		await this.prisma.categoryProduct.delete({
			where: {
				categoryId_productId: {
					categoryId: categoryId,
					productId: productId,
				},
			},
		});
	}
}