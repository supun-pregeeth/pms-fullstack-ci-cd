import React from "react";

export default function ErrorState({ title = "Something went wrong", subtitle = "Try again.", actionLabel, onAction }) {
  return (
    <div className="state state--error">
      <div className="state__icon">!</div>
      <div className="state__text">
        <div className="state__title">{title}</div>
        <div className="state__subtitle">{subtitle}</div>
        {actionLabel && onAction && (
          <button className="btn btn-ghost btn-sm" onClick={onAction}>{actionLabel}</button>
        )}
      </div>
    </div>
  );
}
