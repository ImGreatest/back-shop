import { Module } from "@nestjs/common";
import { CategoryRepository } from "./repository/category.repository";
import { CategoryAdapter } from "../../adapters/category/category.adapter";
import { CategoryService } from "./category.service";

@Module({
	providers: [
		CategoryService,
		{
			provide: CategoryRepository,
			useClass: CategoryAdapter
		}
	],
	exports: [CategoryService]
})
export class CategoryModule {}