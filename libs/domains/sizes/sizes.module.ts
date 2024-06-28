import { Module } from "@nestjs/common";
import { SizesService } from "./sizes.service";
import { SizesRepository } from "./repository/sizes.repository";
import { SizesAdapter } from "../../adapters/sizes/sizes.adapter";

@Module({
	providers: [
		SizesService,
		{
			provide: SizesRepository,
			useClass: SizesAdapter,
		}
	],
	exports: [SizesService],
})
export class SizesModule {}
