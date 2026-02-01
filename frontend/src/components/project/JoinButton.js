import React from "react";

export default function JoinButton({ disabled, onClick }) {
  return (
    <button className="btn btn-primary btn-sm" disabled={disabled} onClick={onClick}>
      Join Project
    </button>
  );
}
