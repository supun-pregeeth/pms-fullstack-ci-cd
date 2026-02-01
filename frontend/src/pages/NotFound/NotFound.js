import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container page">
      <h1 className="pageTitle">404</h1>
      <p className="pageText">Page not found.</p>
      <Link className="btn btn-ghost" to="/">Go Home</Link>
    </div>
  );
}
