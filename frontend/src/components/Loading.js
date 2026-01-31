import React from "react";

export default function Loading({ label = "Loading..." }) {
  return (
    <div className="state">
      <div className="spinner" />
      <div className="state-text">{label}</div>
    </div>
  );
}
