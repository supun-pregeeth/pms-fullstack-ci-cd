import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logoDot" />
          Ruhuna ProjectHUB
        </Link>

        <nav className="navbar__links">
          <NavLink to="/" className="navbar__link">Home</NavLink>
          <NavLink to="/projects" className="navbar__link">Projects</NavLink>
          <NavLink to="/qa" className="navbar__link">Q&A</NavLink>
          <NavLink to="/resources" className="navbar__link">Resources</NavLink>
          <NavLink to="/showcase" className="navbar__link">Showcase</NavLink>
          {user?.role === "MENTOR" && (
            <NavLink to="/mentor" className="navbar__link navbar__link--pill">
              Mentor Dashboard
            </NavLink>
          )}
        </nav>

        <div className="navbar__right">
          {!isAuthenticated ? (
            <div className="navbar__auth">
              <Link className="btn btn-ghost btn-sm" to="/login">Login</Link>
              <Link className="btn btn-primary btn-sm" to="/register">Register</Link>
            </div>
          ) : (
            <div className="navbar__auth">
              <Link className="btn btn-ghost btn-sm" to="/profile">
                {user?.name || "Profile"}
              </Link>
              <button className="btn btn-danger btn-sm" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
