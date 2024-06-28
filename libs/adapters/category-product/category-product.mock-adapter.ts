import { Injectable } from "@nestjs/common";
import { CategoryProductRepository } from "../../domains/category-product/repository/category-product.repository";
import { ReqSetCategoryProductDto } from "../../domains/category-product/dto/req-dto/req-set-category-product.dto";
import { ResCategoryProductDto } from "../../domains/category-product/dto/res-dto/res-category-product.dto";

@Injectable()
export class CategoryProductMockAdapter extends CategoryProductRepository {
	constructor() {
		super();
	}

	async setCategoryProduct(data: ReqSetCategoryProductDto): Promise<void> {
		throw new Error(`${{ ...data }}`);
	}

	async getByCategory(id: string): Promise<ResCategoryProductDto[]> {
		throw new Error(`${id}`);
	}

	async getByProduct(id: string): Promise<ResCategoryProductDto[]> {
		throw new Error(`${id}`);
	}

	async getAll(): Promise<ResCategoryProductDto[]> {
		throw new Error();
	}

	async unSetCategoryProduct(categoryId: string, productId: string): Promise<void> {
		throw new Error(`${categoryId}, ${productId}`);
	}
}
