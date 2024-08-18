import { NestFactory } from '@nestjs/core';
import {CarPartsModule} from "./modules/carParts.module";

async function bootstrap() {
  const app = await NestFactory.create(CarPartsModule);
  await app.listen(3500);
}
bootstrap();
