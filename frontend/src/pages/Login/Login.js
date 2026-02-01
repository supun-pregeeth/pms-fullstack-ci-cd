import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../components/common/Toast/ToastProvider";

export default function Login() {
  const nav = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const data = await authService.login(email, password);
      login(data);
      showToast("success", "Logged in!");
      nav("/");
    } catch (err) {
      showToast("error", "Login failed");
    }
  }

  return (
    <div className="container authWrap">
      <div className="authCard">
        <h1 className="authTitle">Login</h1>
        <form onSubmit={onSubmit} className="authForm">
          <label className="label">Email</label>
          <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className="label">Password</label>
          <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className="btn btn-primary btn-lg" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}
