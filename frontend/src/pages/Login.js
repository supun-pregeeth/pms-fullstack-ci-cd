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
      setErr("Login failed. Make sure Spring Boot backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <div className="container auth">
        <h2>Login</h2>
        {err ? <div className="alert error">{err}</div> : null}
        <form className="form" onSubmit={onSubmit}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@ruhuna.edu" />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          <button className="btn btn-primary" disabled={loading}>{loading ? "Signing in..." : "Login"}</button>
        </form>
      </div>
    </div>
  );
}
