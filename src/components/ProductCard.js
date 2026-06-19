import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, quantityInCart, onAddToCart, loggedInUser }) {
    const remaining = product.stock - quantityInCart;
    const isOutOfStock = remaining <= 0;
    const isLowStock = remaining > 0 && remaining <= 3;
    const [showLoginPrompt, setShowLoginPrompt] = React.useState(false);

    function handleAddToCart() {
        if (!loggedInUser) {
            setShowLoginPrompt(true);
            return;
        }
        onAddToCart(product.id);
    }

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>Rs./{product.price.toFixed(2)}</p>

                {!isOutOfStock
                    ? <p className={isLowStock ? "stock-text stock-low" : "stock-text"}>
                          {remaining} in stock
                      </p>
                    : <p className="stock-text">Sold out</p>
                }

                <button
                    className="btn-primary"
                    disabled={isOutOfStock}
                    onClick={handleAddToCart}
                >
                    {isOutOfStock ? 'Sold Out' : 'Add to Cart'}
                </button>

                {showLoginPrompt && (
                    <div className="login-prompt">
                        <p>Please log in to add items to your cart.</p>
                        <div className="login-prompt-links">
                            <Link to="/login" className="btn-primary" onClick={() => setShowLoginPrompt(false)}>
                                Log In
                            </Link>
                            <Link to="/signup" className="btn-primary" onClick={() => setShowLoginPrompt(false)}>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;