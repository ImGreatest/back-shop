import { Module } from "@nestjs/common";
import { SizesModule } from "../../../libs/domains/sizes/sizes.module";
import { SizesController } from "./sizes.controller";

@Module({
	imports: [SizesModule],
	controllers: [SizesController]
})
export class SizesControllerModule {}
