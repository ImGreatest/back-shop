import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function swagger(app: INestApplication): INestApplication {
	const config = new DocumentBuilder()
		.setTitle('API shop')
		.addBearerAuth()
		.build()

	app.enableCors();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	return app
}
