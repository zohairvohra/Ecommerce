import React from 'react';
import ProductCard from './ProductCard';
import Sneakers from '../data/Sneakers';


function ProductGrid({products, cart, addToCart}) {
    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} quantityInCart={cart[product.id] || 0} onAddToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductGrid;