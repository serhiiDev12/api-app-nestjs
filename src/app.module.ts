import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CarPartsModule} from "./modules/carParts.module";

@Module({
  imports: [CarPartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
