import { Link } from 'react-router-dom';

function Navbar({ cartCount, loggedInUser }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">STREETVIBE</div>
      <div className="sidebar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/login">{loggedInUser ? `Hi, ${loggedInUser}` : 'Login'}</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;