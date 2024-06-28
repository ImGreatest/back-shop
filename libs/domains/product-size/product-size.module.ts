import { Module } from "@nestjs/common";
import { ProductSizeService } from "./product-size.service";
import { ProductSizeRepository } from "./repository/product-size.repository";
import { ProductSizeAdapter } from "../../adapters/product-size/product-size.adapter";

@Module({
	providers: [
		ProductSizeService,
		{
			provide: ProductSizeRepository,
			useClass: ProductSizeAdapter
		}
	],
	exports: [ProductSizeService]
})
export class ProductSizeModule {}