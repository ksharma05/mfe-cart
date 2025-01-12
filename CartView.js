export class CartView {
    render(cartItems) {
        const container = document.getElementById("cart");
        container.innerHTML = `
            <h2>Cart</h2>
            <ul>
                ${cartItems.map((id) => `<li>Product ID: ${id}</li>`).join("")}
            </ul>
        `;
    }
}
