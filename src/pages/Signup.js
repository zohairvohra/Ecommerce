import {useState} from 'react';
import { Link } from 'react-router-dom';

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    const newUser = { username, password };
    onSignup(newUser);
  } 

  return (
    <div className="login-page">
      <h2>Create Account</h2>
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

            <label>Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />  

            <button type="submit" className="btn-primary">Sign Up</button>
            {message && <p className="error-message">{message}</p>}
        </form>
            <p className="auth-switch">
                Already have an account? <Link to="/login">Log in</Link>
            </p>

              {message && <p className="error-message">{message}</p>}
                      


    </div>
  );
}

export default Signup;