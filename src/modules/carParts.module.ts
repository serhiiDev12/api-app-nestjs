import { Module } from "@nestjs/common";
import { CarPartsController } from "../controllers/carParts.controller";
import {CarPartsService} from "../services/carParts.service";

@Module({
    controllers: [CarPartsController],
    providers: [CarPartsService]
})
export class CarPartsModule {}