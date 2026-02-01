import React from "react";

export default function EmptyState({ title = "No results", subtitle = "Try adjusting your filters.", actionLabel, onAction }) {
  return (
    <div className="state state--empty">
      <div className="state__icon">◎</div>
      <div className="state__text">
        <div className="state__title">{title}</div>
        <div className="state__subtitle">{subtitle}</div>
        {actionLabel && onAction && (
          <button className="btn btn-primary btn-sm" onClick={onAction}>{actionLabel}</button>
        )}
      </div>
    </div>
  );
}
