import React from "react";

export default function Card({ image, title, subtitle, tags = [], actions }) {
  return (
    <div className="card">
      {image ? <img className="card-img" src={image} alt={title} /> : null}
      <div className="card-body">
        <div className="card-title">{title}</div>
        {subtitle ? <div className="card-sub">{subtitle}</div> : null}
        {tags?.length ? (
          <div className="chip-row">
            {tags.map((t) => <span className="chip" key={t}>{t}</span>)}
          </div>
        ) : null}
        {actions ? <div className="card-actions">{actions}</div> : null}
      </div>
    </div>
  );
}
