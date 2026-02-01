import React from "react";

export default function LoadingState({ title = "Loading...", subtitle = "Please wait a moment." }) {
  return (
    <div className="state state--loading">
      <div className="state__spinner" />
      <div className="state__text">
        <div className="state__title">{title}</div>
        <div className="state__subtitle">{subtitle}</div>
      </div>
    </div>
  );
}
