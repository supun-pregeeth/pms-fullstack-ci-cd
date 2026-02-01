import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { useToast } from "../../components/common/Toast/ToastProvider";

export default function Register() {
  const nav = useNavigate();
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await authService.register({ name, email, password });
      showToast("success", "Account created. Please login.");
      nav("/login");
    } catch (err) {
      showToast("error", "Register failed");
    }
  }

  return (
    <div className="container authWrap">
      <div className="authCard">
        <h1 className="authTitle">Register</h1>
        <form onSubmit={onSubmit} className="authForm">
          <label className="label">Name</label>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} />

          <label className="label">Email</label>
          <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className="label">Password</label>
          <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className="btn btn-primary btn-lg" type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
}
