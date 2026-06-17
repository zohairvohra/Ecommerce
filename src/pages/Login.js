function Login() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <label>Username</label>
        <input type="text" placeholder="Enter username" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;