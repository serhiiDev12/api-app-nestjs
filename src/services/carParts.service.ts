import { Injectable } from "@nestjs/common";
import { v4 } from 'uuid';
import {CarPartModel} from "../entities/carPart.model";
import {CarPartSearchObjectModel} from "../entities/carPartSearchObject.model";

@Injectable()
export class CarPartsService {
    carParts: CarPartModel[] = [
        new CarPartModel(v4(), "Sway link", "45.55", "Chevy", false),
        new CarPartModel(v4(), "Sway bar", "25.55", "Brembo", false),
        new CarPartModel(v4(), "ECU Block", "585.55", "AEM", false),
        new CarPartModel(v4(), "Coil over", "145.55", "Brembo", false)
    ];

    insertCarPart(title: string, price: string, brand: string): string {
        const newPart = new CarPartModel(v4(), title, price, brand, false)
        this.carParts.push(newPart);
        return newPart.id;
    }

    getCarPart(): CarPartModel[] {
        return [...this.carParts];
    }

    removeCarPart(id: string): CarPartModel[] {
        const part = this.carParts.find(item => item.id === id);
        const index = this.carParts.indexOf(part);
        part.removed = true;

        this.carParts = [...this.carParts.splice(0, index), part, ...this.carParts.splice(index, this.carParts.length)];
        return this.carParts;
    }

    searchCarParts(searchQuery: string): CarPartModel[] {
        return this.carParts
            .filter(item =>
                `${item.title.toLocaleLowerCase()} ${item.brand.toLocaleLowerCase()}`
                    .toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
            );
    }
}