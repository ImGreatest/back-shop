import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "../../../libs/domains/product/product.service";
import { ReqCreateProductDto } from "../../../libs/domains/product/dto/req-dto/req-create-product.dto";
import { ResProductDto } from "../../../libs/domains/product/dto/res-dto/res-product.dto";
import { ReqUpdateProductDto } from "../../../libs/domains/product/dto/req-dto/req-update-product.dto";

@ApiTags('product')
@Controller('product')
export class ProductController {
	constructor(private productService: ProductService) {}

	@Post('create-product')
	@ApiBody({ type: ReqCreateProductDto })
	createProduct(@Body() data: ReqCreateProductDto): Promise<void> {
		return this.productService.createProduct(data);
	}

	@Get('get-product/:id')
	getProduct(@Param('id') id: string): Promise<ResProductDto> {
		return this.productService.getProduct(id);
	}

	@Get('get-product-by-name/:name')
	getProductByName(@Param('name') name: string): Promise<ResProductDto[]> {
		return this.productService.getProductsByName(name);
	}

	@Get('get-products')
	getProducts(): Promise<ResProductDto[]> {
		return this.productService.getProducts()
	}

	@Put('update-product/:id')
	@ApiBody({ type: ReqUpdateProductDto })
	updateProduct(
		@Param('id') id: string,
		@Body() data: ReqUpdateProductDto,
	): Promise<void> {
		return this.productService.updateProduct(id, data);
	}

	@Delete('delete-product/:id')
	deleteProduct(@Param('id') id: string): Promise<void> {
		return this.productService.deleteProduct(id);
	}
}
