import React from "react";

function CartDrawer({ cart, products, onRemove }) {
    const items = Object.keys(cart).map((productId) => {
        const product = products.find((p) => p.id === Number(productId));
        return { ...product, quantity: cart[productId] };
    });

    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div className="cart-drawer">
            <h2>Your Cart</h2>

            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (items.map((item) => (
                <div key={item.product.id} className="cart-item">   
                    <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
                    <h3>{item.product.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: Rs.{(item.product.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => onRemove(item.product.id)}>Remove</button>
                </div>
            )))}
            <p className="total">Total: Rs.{total.toFixed(2)}</p>
        </div>
    );
}

export default CartDrawer;