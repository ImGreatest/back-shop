import { Module } from '@nestjs/common';
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { UserControllerModule } from "./controllers/user/user-controller.module";
import { CategoryControllerModule } from "./controllers/category/category-controller.module";
import { ProductControllerModule } from "./controllers/product/product-controller.module";
import { SizesControllerModule } from "./controllers/sizes/sizes-controller.module";
import { CategoryProductControllerModule } from "./controllers/category-product/category-product-controller.module";
import { ProductSizeControllerModule } from "./controllers/product-size/product-size-controller.module";
import { UserBucketControllerModule } from "./controllers/user-bucket/user-bucket-controller.module";

@Module({
  imports: [
    PrismaModule,
		UserControllerModule,
		CategoryControllerModule,
	  ProductControllerModule,
	  SizesControllerModule,
	  CategoryProductControllerModule,
	  ProductSizeControllerModule,
	  UserBucketControllerModule,
  ],
})
export class AppModule {}
