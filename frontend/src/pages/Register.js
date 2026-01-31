import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await register({ name, email, password });
      window.location.href = "/";
    } catch (e2) {
      setErr("Register failed. Make sure Spring Boot backend is running.");
    }
  };

  return (
    <div className="section">
      <div className="container auth">
        <h2>Register</h2>
        {err ? <div className="alert error">{err}</div> : null}
        <form className="form" onSubmit={onSubmit}>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@ruhuna.edu" />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          <button className="btn btn-primary">Create account</button>
        </form>
      </div>
    </div>
  );
}
