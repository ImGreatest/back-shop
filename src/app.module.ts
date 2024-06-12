import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from "../libs/services/prisma/prisma.module";
import { ControllersModule } from "./controllers/controllers.module";

@Module({
  imports: [
    PrismaModule,
    ControllersModule
  ],
  providers: [AppService],
})
export class AppModule {}
