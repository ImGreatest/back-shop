import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "../../domains/category/repository/category.repository";
import { ReqCreateCategoryDto } from "../../domains/category/dto/req-dto/req-create-category.dto";
import { ResCategoryDto } from "../../domains/category/dto/res-dto/res-category.dto";
import { ReqUpdateCategoryDto } from "../../domains/category/dto/req-dto/req-update-category.dto";

@Injectable()
export class CategoryMockAdapter extends CategoryRepository {
	constructor() {
		super();
	}

	async createCategory(data: ReqCreateCategoryDto): Promise<void> {
		throw new Error(`${{ ...data }}`);
	}

	async getCategory(id: string): Promise<ResCategoryDto> {
		throw new Error(`${id}`);
	}

	async getCategories(): Promise<ResCategoryDto[]> {
		throw new Error();
	}

	async getCategoryByName(name: string): Promise<ResCategoryDto[]> {
		throw new Error(`${name}`);
	}

	async updateCategory(id: string, data: ReqUpdateCategoryDto): Promise<void> {
		throw new Error(`${id}, ${{ ...data }}`);
	}

	async deleteCategory(id: string): Promise<void> {
		throw new Error(`${id}`);
	}
}
