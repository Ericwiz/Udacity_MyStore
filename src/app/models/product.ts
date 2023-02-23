export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string

    constructor() {
        this.id = 0;
        this.title = ''
        this.price = 0
        this.description = ''
        this.image = ''
        this.category = ''
    }
}