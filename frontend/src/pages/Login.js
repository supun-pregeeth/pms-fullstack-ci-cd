import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login(email, password);
      window.location.href = "/";
    } catch (e2) {
      setErr("Login failed. Check your email/password or backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-head">
          <h2>Login</h2>
          <p>Welcome back. Continue to Ruhuna ProjectHUB.</p>
        </div>

        {err ? <div className="alert error">{err}</div> : null}

        <form onSubmit={onSubmit}>
          <div className="form-row">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@ruhuna.edu"
              autoComplete="email"
            />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <div className="auth-actions">
            <button className="btn btn-primary btn-full" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </button>
          </div>
        </form>

        <div className="auth-divider" />

        <div className="auth-footer">
          Don’t have an account? <Link to="/register">Create one</Link>
        </div>
      </div>
    </div>
  );
}
