import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CategoryProductService } from "../../../libs/domains/category-product/category-product.service";
import {
	ReqSetCategoryProductDto
} from "../../../libs/domains/category-product/dto/req-dto/req-set-category-product.dto";
import { ResCategoryProductDto } from "../../../libs/domains/category-product/dto/res-dto/res-category-product.dto";

@ApiTags('category-product')
@Controller('category-product')
export class CategoryProductController {
	constructor(private categoryProductService: CategoryProductService) {}

	@Post('set-category-product')
	@ApiBody({ type: ReqSetCategoryProductDto })
	setCategoryProduct(@Body() data: ReqSetCategoryProductDto): Promise<void> {
		return this.categoryProductService.setCategoryProduct(data);
	}

	@Get('get-by-category/:id')
	getByCategory(@Param('id') id: string): Promise<ResCategoryProductDto[]> {
		return this.categoryProductService.getByCategory(id);
	}

	@Get('get-by-product/:id')
	getByProduct(@Param('id') id: string): Promise<ResCategoryProductDto[]> {
		return this.categoryProductService.getByProduct(id);
	}

	@Get('get-all')
	getAll(): Promise<ResCategoryProductDto[]> {
		return this.categoryProductService.getAll();
	}

	@Delete('unset-category-product/:categoryId/:productId')
	unSetCategoryProduct(
		@Param('categoryId') categoryId: string,
		@Param('productId') productId: string,
	): Promise<void> {
		return this.categoryProductService.unSetCategoryProduct(categoryId, productId);
	}
}
