import {useState} from 'react';
import { Link } from 'react-router-dom';

function Login({ users, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      onLoginSuccess(user);
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn-primary">Log In</button>
        
      </form>
        {message && <p className="login-message">{message}</p>}

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

        {message && <p className="login-message">{message}</p>}

    </div>
  );
}

export default Login;