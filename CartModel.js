export class CartModel {
    constructor() {
        this.cart = [];
    }

    addToCart(productId) {
        this.cart.push(productId);
    }

    getCart() {
        return this.cart;
    }
}
