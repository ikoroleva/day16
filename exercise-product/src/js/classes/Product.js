class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    sell() {
        return this.quantity--;
    }
    store(count) {
        return this.quantity += count;
    }
}

export { Product }