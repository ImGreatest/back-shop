import { Module } from "@nestjs/common";
import { ProductSizeModule } from "../../../libs/domains/product-size/product-size.module";
import { ProductSizeController } from "./product-size.controller";

@Module({
	imports: [ProductSizeModule],
	controllers: [ProductSizeController]
})
export class ProductSizeControllerModule {}
