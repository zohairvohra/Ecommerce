import {Link} from 'react-router-dom';

function CartPage({ cart, products, onRemove }) {
    const items = Object.keys(cart)
        .map((productId) => {
            const product = products.find((p) => p.id === Number(productId));
            return { product, quantity: cart[productId] };
        })
        .filter((item) => item.product !== undefined);

    const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>

            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {items.map((item) => (
                            <div key={item.product.id} className="cart-item">
                                <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
                                <div className="cart-item-information">
                                    <h3>{item.product.name}</h3>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: Rs.{(item.product.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button className="btn-primary" onClick={() => onRemove(item.product.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <p className="total">Total: Rs.{total.toFixed(2)}</p>
                    <Link to="/checkout" className="btn-primary">Proceed to Checkout</Link>
                </>
            )}
        </div>
    );
}

export default CartPage;