import { Module } from "@nestjs/common";
import { CategoryProductModule } from "../../../libs/domains/category-product/category-product.module";
import { CategoryProductController } from "./category-product.controller";

@Module({
	imports: [CategoryProductModule],
	controllers: [CategoryProductController],
})
export class CategoryProductControllerModule {}