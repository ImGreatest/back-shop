import { Module } from "@nestjs/common";
import { CategoryModule } from "../../../libs/domains/category/category.module";
import { CategoryController } from "./category.controller";

@Module({
	imports: [CategoryModule],
	controllers: [CategoryController]
})
export class CategoryControllerModule {}