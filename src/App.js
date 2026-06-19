import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup';
import { useState } from 'react';
import sneakers from './data/Sneakers';
import users from './data/Users';
import './App.css';

function App() {
  const [cart, setCart] = useState({});
  const [userList, setUserList] = useState(users);
  const [loggedInUser, setLoggedInUser] = useState(null);

  function handleLoginSuccess(username) {
    setLoggedInUser(username);
  }

  function handleSignup(newUser) {
    setUserList([...userList, newUser]);
    setLoggedInUser(newUser.username);
  }

  function addToCart(productId) {
    const product = sneakers.find((p) => p.id === productId);
    const currentQuantity = cart[productId] || 0;
    if (currentQuantity >= product.stock) return;
    setCart({ ...cart, [productId]: currentQuantity + 1 });
  }

  function removeFromCart(productId) {
    const newCart = { ...cart };
    delete newCart[productId];
    setCart(newCart);
  }

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} loggedInUser={loggedInUser} />
      <div className="main-content">
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
                loggedInUser={loggedInUser}
              />
            }
          />
          <Route
            path="/login"
            element={<Login users={userList} onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                products={sneakers}
                onRemove={removeFromCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout onOrderComplete={() => setCart({})} />}
          />
          <Route
            path="/signup"
            element={<Signup onSignup={handleSignup} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;