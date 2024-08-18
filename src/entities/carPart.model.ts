export class CarPartModel {
    id: string;
    title: string;
    price: string;
    brand: string;
    removed: boolean;
    constructor(id: string, title: string, price: string, brand: string, removed: boolean) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.brand = brand;
        this.removed = removed;
    }
}