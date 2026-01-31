import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { register } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await register({ name, email, password });
      window.location.href = "/";
    } catch (e2) {
      setErr("Registration failed. Check backend connection or email already used.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-head">
          <h2>Register</h2>
          <p>Create your account and start publishing projects.</p>
        </div>

        {err ? <div className="alert error">{err}</div> : null}

        <form onSubmit={onSubmit}>
          <div className="form-row">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

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
              autoComplete="new-password"
            />
          </div>

          <div className="auth-actions">
            <button className="btn btn-primary btn-full" disabled={loading}>
              {loading ? "Creating..." : "Create account"}
            </button>
          </div>
        </form>

        <div className="auth-divider" />

        <div className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
