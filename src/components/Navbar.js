import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="logo">STREETVIBE</span>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;