import { Injectable } from "@nestjs/common";
import { CategoryProductRepository } from "./repository/category-product.repository";
import { ReqSetCategoryProductDto } from "./dto/req-dto/req-set-category-product.dto";
import { ResCategoryProductDto } from "./dto/res-dto/res-category-product.dto";

@Injectable()
export class CategoryProductService {
	constructor(private rep: CategoryProductRepository) {}

	setCategoryProduct(data: ReqSetCategoryProductDto): Promise<void> {
		return this.rep.setCategoryProduct(data);
	}

	getByCategory(id: string): Promise<ResCategoryProductDto[]> {
		return this.rep.getByCategory(id);
	}

	getByProduct(id: string): Promise<ResCategoryProductDto[]> {
		return this.rep.getByProduct(id);
	}

	getAll(): Promise<ResCategoryProductDto[]> {
		return this.rep.getAll();
	}

	unSetCategoryProduct(categoryId: string, productId: string): Promise<void> {
		return this.rep.unSetCategoryProduct(categoryId, productId);
	}
}
