import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { Body, Controller, Post } from "@nestjs/common";
import { ReqSignInDto } from "./dto/req-sign-in.dto";
import { User } from "@prisma/client";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
	) {}

	@Post('login')
	@ApiBody({ type: ReqSignInDto })
	signIn(@Body() data: ReqSignInDto): Promise<User> {
		return this.authService.signIn(data);
	}

	@Post('sign-up')
	@ApiBody({ type: ReqSignInDto })
	signUp(@Body() data: ReqSignInDto): Promise<void> {
		return this.authService.signUp(data);
	}
}
