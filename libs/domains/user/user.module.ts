import { Module } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { UserAdapter } from "../../adapters/user/user.adapter";
import { UserService } from "./user.service";
import { CryptoModule } from "../../services/crypto/crypto.module";

@Module({
	imports: [CryptoModule],
	providers: [
		UserService,
		{
			provide: UserRepository,
			useClass: UserAdapter
		}
	],
	exports: [UserService]
})
export class UserModule {}
