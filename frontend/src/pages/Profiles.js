import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user, isLoggedIn } = useContext(AuthContext);

  return (
    <div className="section">
      <div className="container">
        <div className="page-head">
          <h2>Profile</h2>
          <div className="muted">Your account information.</div>
        </div>

        {!isLoggedIn ? (
          <div className="panel">
            Please <Link className="link" to="/login">login</Link> to view your profile.
          </div>
        ) : (
          <div className="panel">
            <div><strong>Name:</strong> {user?.name}</div>
            <div><strong>Email:</strong> {user?.email}</div>
            <div><strong>Role:</strong> {user?.role}</div>
          </div>
        )}
      </div>
    </div>
  );
}
