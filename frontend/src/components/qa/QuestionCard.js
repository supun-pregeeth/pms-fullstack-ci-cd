import React from "react";

export default function QuestionCard({ q, onView, onAnswer }) {
  return (
    <div className="uiCard">
      <div className="uiCard__top">
        <span className="badge">QUESTION</span>
        <span className="uiCard__meta">{q.answersCount ?? 0} answers</span>
      </div>

      <h3 className="uiCard__title">{q.title}</h3>
      <p className="uiCard__desc">{q.body?.length > 120 ? q.body.slice(0, 120) + "…" : q.body}</p>

      <div className="uiCard__actions">
        <button className="btn btn-ghost btn-sm" onClick={onView}>View</button>
        <button className="btn btn-primary btn-sm" onClick={onAnswer}>Answer</button>
      </div>
    </div>
  );
}
