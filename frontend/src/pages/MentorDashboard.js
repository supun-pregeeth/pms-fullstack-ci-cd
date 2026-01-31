import React from "react";

export default function MentorDashboard() {
  return (
    <div className="section">
      <div className="container">
        <div className="page-head">
          <h2>Mentor Dashboard</h2>
          <div className="muted">Approvals, moderation, manage resources/showcase/projects.</div>
        </div>
        <div className="panel">
          This is the dashboard shell. Connect backend to show:
          <ul>
            <li>Pending answer approvals</li>
            <li>Manage resources</li>
            <li>Manage showcase posts</li>
            <li>Moderate content</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
