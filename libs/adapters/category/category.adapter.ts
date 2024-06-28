import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "../../domains/category/repository/category.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqCreateCategoryDto } from "../../domains/category/dto/req-dto/req-create-category.dto";
import { ResCategoryDto } from "../../domains/category/dto/res-dto/res-category.dto";
import { ReqUpdateCategoryDto } from "../../domains/category/dto/req-dto/req-update-category.dto";

@Injectable()
export class CategoryAdapter extends CategoryRepository {
	constructor(private prisma: PrismaService) {
		super();
	}

	async createCategory(data: ReqCreateCategoryDto): Promise<void> {
		await this.prisma.category.create({
			data: { ...data }
		});
	}

	async getCategory(id: string): Promise<ResCategoryDto> {
		return this.prisma.category.findUnique({
			where: {
				id: id,
			},
		});
	}

	async getCategories(): Promise<ResCategoryDto[]> {
		return this.prisma.category.findMany();
	}

	async getCategoryByName(name: string): Promise<ResCategoryDto[]> {
		return this.prisma.category.findMany({
			where: {
				name: name,
			},
		});
	}

	async updateCategory(id: string, data: ReqUpdateCategoryDto): Promise<void> {
		await this.prisma.category.update({
			where: {
				id: id,
			},
			data: { ...data },
		});
	}

	async deleteCategory(id: string): Promise<void> {
		await this.prisma.category.delete({
			where: {
				id: id,
			},
		});
	}
}
