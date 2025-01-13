import { CartModel } from "./CartModel.js";
import { CartView } from "./CartView.js";
import { eventBus } from "https://6784a8458590f7a8b7ff8cb8--courageous-tulumba-4729b7.netlify.app/eventBus.js";

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
