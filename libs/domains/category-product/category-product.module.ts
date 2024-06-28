import { Module } from "@nestjs/common";
import { CategoryProductService } from "./category-product.service";
import { CategoryProductRepository } from "./repository/category-product.repository";
import { CategoryProductAdapter } from "../../adapters/category-product/category-product.adapter";

@Module({
	providers: [
		CategoryProductService,
		{
			provide: CategoryProductRepository,
			useClass: CategoryProductAdapter,
		}
	],
	exports: [CategoryProductService]
})
export class CategoryProductModule {}
