import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import { useState } from 'react';
import sneakers from './data/Sneakers';


function App() {
const [cart, setCart] = useState({});
const [isCartOpen, setIsCartOpen] = useState(false);


    function addToCart(productId) {
        const product = sneakers.find((p) => p.id === productId);
        const currentQuantity = cart[productId] || 0;

        if (currentQuantity >= product.stock) {
            return;
        }
        setCart({...cart, [productId]: currentQuantity + 1});
    }

    function removeFromCart(productId) {
        const newCart = {...cart};
        delete newCart[productId];
        setCart(newCart);
    }

    const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

     return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              products={sneakers}
              cart={cart}
              onAddToCart={addToCart}
              onRemove={removeFromCart}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;