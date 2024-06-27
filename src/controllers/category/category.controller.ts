import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "../../../libs/domains/category/category.service";
import { ReqCreateCategoryDto } from "../../../libs/domains/category/dto/req-dto/req-create-category.dto";
import { ResCategoryDto } from "../../../libs/domains/category/dto/res-dto/res-category.dto";
import { ReqUpdateCategoryDto } from "../../../libs/domains/category/dto/req-dto/req-update-category.dto";

@ApiTags('category')
@Controller('category')
export class CategoryController {
	constructor(private categoryService: CategoryService) {}

	@Post('create-category')
	@ApiBody({ type: ReqCreateCategoryDto })
	createCategory(@Body() data: ReqCreateCategoryDto): Promise<void> {
		return this.categoryService.createCategory(data);
	}

	@Get('get-category/:id')
	getCategory(@Param('id') id: string): Promise<ResCategoryDto> {
		return this.categoryService.getCategory(id);
	}

	@Get('get-category-by-name/:name')
	getCategoryByName(@Param('name') name: string): Promise<ResCategoryDto[]> {
		return this.categoryService.getCategoryByName(name);
	}

	@Get('get-categories')
	getCategories(): Promise<ResCategoryDto[]> {
		return this.categoryService.getCategories();
	}

	@Put('update-category/:id')
	@ApiBody({ type: ReqUpdateCategoryDto })
	updateCategory(
		@Param('id') id: string,
		@Body() data: ReqUpdateCategoryDto
	): Promise<void> {
		return this.categoryService.updateCategory(id, data);
	}

	@Delete('delete-category/:id')
	deleteCategory(@Param('id') id: string): Promise<void> {
		return this.categoryService.deleteCategory(id);
	}
}