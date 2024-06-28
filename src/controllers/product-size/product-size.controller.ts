import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductSizeService } from "../../../libs/domains/product-size/product-size.service";
import { ReqSetSizeDto } from "../../../libs/domains/product-size/dto/req-dto/req-set-size.dto";
import { ResProductSize } from "../../../libs/domains/product-size/dto/res-dto/res-size.dto";
import { ReqChangeAbleDto } from "../../../libs/domains/product-size/dto/req-dto/req-change-able.dto";

@ApiTags('product-size')
@Controller('product-size')
export class ProductSizeController {
	constructor(private productSizeService: ProductSizeService) {}

	@Post('set-size')
	@ApiBody({ type: ReqSetSizeDto })
	setSize(@Body() data: ReqSetSizeDto): Promise<void> {
		return this.productSizeService.setSize(data);
	}

	@Get('get-size/:productId/:sizeId')
	getSize(
		@Param('productId') productId: string,
		@Param('sizeId') sizeId: string,
	): Promise<ResProductSize> {
		return this.productSizeService.getSize(productId, sizeId);
	}

	@Get('get-sizes-product/:id')
	getSizesProduct(@Param('id') id: string): Promise<ResProductSize[]> {
		return this.productSizeService.getSizesProduct(id);
	}

	@Put('update-size/:productId/:sizeId')
	@ApiBody({ type: ReqChangeAbleDto })
	updateSize(
		@Param('productId') productId: string,
		@Param('sizeId') sizeId: string,
		@Body() data: ReqChangeAbleDto
	): Promise<void> {
		return this.productSizeService.updateSize(productId, sizeId, data);
	}

	@Delete('delete-size/:productId/:sizeId')
	deleteSize(
		@Param('productId') productId: string,
		@Param('sizeId') sizeId: string,
	): Promise<void> {
		return this.productSizeService.deleteSize(productId, sizeId);
	}
}
