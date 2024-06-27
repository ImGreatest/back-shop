import { Injectable } from "@nestjs/common";
import { ReqCreateCategoryDto } from "../dto/req-dto/req-create-category.dto";
import { ResCategoryDto } from "../dto/res-dto/res-category.dto";
import { ReqUpdateCategoryDto } from "../dto/req-dto/req-update-category.dto";

@Injectable()
export abstract class CategoryRepository {
	abstract createCategory(data: ReqCreateCategoryDto): Promise<void>;

	abstract getCategory(id: string): Promise<ResCategoryDto>;

	abstract getCategoryByName(name: string): Promise<ResCategoryDto[]>;

	abstract getCategories(): Promise<ResCategoryDto[]>;

	abstract updateCategory(id: string, data: ReqUpdateCategoryDto): Promise<void>;

	abstract deleteCategory(id: string): Promise<void>;
}
