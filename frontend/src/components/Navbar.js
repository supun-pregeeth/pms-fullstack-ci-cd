import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">Ruhuna ProjectHUB</Link>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
          <NavLink to="/qa" className={({ isActive }) => (isActive ? "active" : "")}>Q&A</NavLink>
          <NavLink to="/resources" className={({ isActive }) => (isActive ? "active" : "")}>Resources</NavLink>
          <NavLink to="/showcase" className={({ isActive }) => (isActive ? "active" : "")}>Showcase</NavLink>

          {isLoggedIn && user?.role === "MENTOR" && (
            <NavLink to="/mentor" className={({ isActive }) => (isActive ? "active" : "")}>Mentor</NavLink>
          )}
        </nav>

        <div className="nav-actions">
          {!isLoggedIn ? (
            <>
              <Link className="btn btn-ghost" to="/login">Login</Link>
              <Link className="btn btn-primary" to="/register">Register</Link>
            </>
          ) : (
            <>
              <Link className="btn btn-ghost" to="/profile">Profile</Link>
              <button className="btn btn-primary" onClick={logout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
