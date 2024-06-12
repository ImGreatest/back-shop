import { Module } from "@nestjs/common";
import { UserModule } from "../../../libs/domains/user/user.module";
import { UserController } from "./user.controller";

@Module({
	imports: [UserModule],
	controllers: [UserController]
})
export class UserControllerModule {}
