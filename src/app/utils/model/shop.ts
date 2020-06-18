export class ShopList {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public quantity: string;
    public img: string;

    constructor(data: any) {
        this.id = data.id || 0;
        this.name = data.name || '';
        this.description = data.description || '';
        this.price = parseInt(data.price) || 0;
        this.quantity = data.quantity || '';
        this.img = data.image || '';
    }
}