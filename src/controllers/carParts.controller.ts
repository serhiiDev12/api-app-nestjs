import {Controller, Post, Body, Get, Delete, Param, Query} from "@nestjs/common";
import {CarPartsService} from "../services/carParts.service";
import {CarPartModel} from "../entities/carPart.model";

@Controller('carParts')
export class CarPartsController {
    constructor(private readonly carPartsService: CarPartsService) { }

    @Post('/add')
    addInventory (@Body() part: CarPartModel) {
        const id =  this.carPartsService.insertCarPart(part.title, part.price, part.brand);
        return { id }
    }

    @Get('allParts')
    searchParts (@Query('queryParams') queryParams?: string) {
        if (!queryParams) {
            return this.carPartsService.getCarPart();
        }

        const carPartsList = this.carPartsService.searchCarParts(queryParams);
        return carPartsList;
    }

    @Delete()
    removeCarPart (@Body('id') id: string) {
        const carPartsList = this.carPartsService.removeCarPart(id);
        return { parts: carPartsList }
    }
}