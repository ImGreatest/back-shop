import { Injectable } from "@nestjs/common";
import { ReqSetCategoryProductDto } from "../dto/req-dto/req-set-category-product.dto";
import { ResCategoryProductDto } from "../dto/res-dto/res-category-product.dto";

@Injectable()
export abstract class CategoryProductRepository {
	abstract setCategoryProduct(data: ReqSetCategoryProductDto): Promise<void>;

	abstract getByCategory(id: string): Promise<ResCategoryProductDto[]>;

	abstract getByProduct(id: string): Promise<ResCategoryProductDto[]>;

	abstract getAll(): Promise<ResCategoryProductDto[]>;

	abstract unSetCategoryProduct(categoryId: string, productId: string): Promise<void>;
}
