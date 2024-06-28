import { Module } from "@nestjs/common";
import { UserBucketModule } from "../../../libs/domains/user-bucket/user-bucket.module";
import { UserBucketController } from "./user-bucket.controller";

@Module({
	imports: [UserBucketModule],
	controllers: [UserBucketController]
})
export class UserBucketControllerModule {}
