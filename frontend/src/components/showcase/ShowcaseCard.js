import React from "react";

export default function ShowcaseCard({ s, onView, onLike }) {
  return (
    <div className="uiCard">
      <div className="uiCard__top">
        <span className="badge">{(s.category || "SHOWCASE").toUpperCase()}</span>
        <span className="uiCard__meta">{s.likesCount ?? 0} likes</span>
      </div>

      <h3 className="uiCard__title">{s.title}</h3>
      <p className="uiCard__desc">{s.description}</p>

      <div className="uiCard__actions">
        <button className="btn btn-ghost btn-sm" onClick={onView}>View</button>
        <button className="btn btn-primary btn-sm" onClick={onLike}>Like</button>
      </div>
    </div>
  );
}
