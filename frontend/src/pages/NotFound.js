import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section">
      <div className="container">
        <h2>Page not found</h2>
        <p className="muted">The page you requested does not exist.</p>
        <Link className="btn btn-primary" to="/">Go Home</Link>
      </div>
    </div>
  );
}
