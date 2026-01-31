import React from "react";

export default function EmptyState({ message = "No items found." }) {
  return <div className="state empty">{message}</div>;
}
