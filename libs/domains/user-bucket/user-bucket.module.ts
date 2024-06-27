import { Module } from "@nestjs/common";
import { UserBucketService } from "./user-bucket.service";
import { UserBucketRepository } from "./repository/user-bucket.repository";
import { UserBucketAdapter } from "../../adapters/user-bucket/user-bucket.adapter";

@Module({
	providers: [
		UserBucketService,
		{
			provide: UserBucketRepository,
			useClass: UserBucketAdapter,
		},
	],
	exports: [UserBucketService]
})
export class UserBucketModule {}
