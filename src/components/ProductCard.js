import React from "react";


function ProductCard({ product, quantityInCart, onAddToCart }) {
    const remaining = product.stock - quantityInCart;
    const IsOutOfStock = remaining <= 0;

    return (
            <div className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
                <p>Rs./{product.price.toFixed(2)}</p>

                {!IsOutOfStock
                ? <p className="stock-text">{remaining} in stock</p>
                : <p className="stock-text">Sold out</p>
                }

                <button onClick={() => onAddToCart(product.id)}>
                {IsOutOfStock ? 'Sold Out' : 'Add to Cart'}
                </button>
            </div>
    );
}

export default ProductCard;