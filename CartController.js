import { CartModel } from "./CartModel.js";
import { CartView } from "./CartView.js";
import { eventBus } from "../../shared/eventBus.js";

export class CartController {
    constructor() {
        this.model = new CartModel();
        this.view = new CartView();

        eventBus.on("add-to-cart", (productId) => this.addToCart(productId));
    }

    addToCart(productId) {
        this.model.addToCart(productId);
        this.view.render(this.model.getCart());
    }
}
