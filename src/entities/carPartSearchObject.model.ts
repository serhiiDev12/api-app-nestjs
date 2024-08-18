export class CarPartSearchObjectModel {
    id: string;
    searchString: string;
    constructor(id: string, searchString: string) {
        this.id = id;
        this.searchString = searchString
    }
}