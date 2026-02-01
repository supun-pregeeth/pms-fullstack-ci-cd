import React from "react";

export default function ResourceCard({ r, onBookmark }) {
  return (
    <div className="uiCard">
      <div className="uiCard__top">
        <span className="badge">{r.type}</span>
        <span className="uiCard__meta">Mentor pick</span>
      </div>

      <h3 className="uiCard__title">{r.title}</h3>
      <p className="uiCard__desc">{r.description}</p>

      <div className="uiCard__tags">
        {(r.tags || []).slice(0, 3).map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="uiCard__actions">
        <a className="btn btn-ghost btn-sm" href={r.url} target="_blank" rel="noreferrer">Open</a>
        <button className="btn btn-primary btn-sm" onClick={onBookmark}>Bookmark</button>
      </div>
    </div>
  );
}
