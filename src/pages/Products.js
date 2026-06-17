import ProductCard from '../components/ProductCard';

function Products({ products, cart, onAddToCart }) {
  return (
    <div className="products-page">
      <h2>Shop the Drop</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            quantityInCart={cart[product.id] || 0}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;