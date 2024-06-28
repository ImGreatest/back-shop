import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "./repository/category.repository";
import { ReqCreateCategoryDto } from "./dto/req-dto/req-create-category.dto";
import { ResCategoryDto } from "./dto/res-dto/res-category.dto";
import { ReqUpdateCategoryDto } from "./dto/req-dto/req-update-category.dto";

@Injectable()
export class CategoryService {
	constructor(private readonly catRep: CategoryRepository) {}

	createCategory(data: ReqCreateCategoryDto): Promise<void> {
		return this.catRep.createCategory(data);
	}

	getCategory(id: string): Promise<ResCategoryDto> {
		return this.catRep.getCategory(id);
	}

	getCategoryByName(name: string): Promise<ResCategoryDto[]> {
		return this.catRep.getCategoryByName(name);
	}

	getCategories(): Promise<ResCategoryDto[]> {
		return this.catRep.getCategories();
	}

	updateCategory(id: string, data: ReqUpdateCategoryDto): Promise<void> {
		return this.catRep.updateCategory(id, data);
	}

	deleteCategory(id: string): Promise<void> {
		return this.catRep.deleteCategory(id);
	}
}
