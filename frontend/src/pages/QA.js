import React, { useMemo, useState } from "react";
import EmptyState from "../components/EmptyState";

const demoQuestions = [
  { id: 1, title: "How to structure Spring Boot packages?", answers: 4, createdAt: "2026-01-01" },
  { id: 2, title: "Best way to store project tags in MySQL?", answers: 2, createdAt: "2026-01-05" },
  { id: 3, title: "How to secure endpoints using JWT in Spring Security?", answers: 8, createdAt: "2026-01-10" },
];

export default function QA() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("newest");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    let arr = demoQuestions.filter((x) => x.title.toLowerCase().includes(q.toLowerCase()));
    if (sort === "newest") arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (sort === "mostAnswered") arr.sort((a, b) => b.answers - a.answers);
    return arr;
  }, [q, sort]);

  return (
    <div className="section">
      <div className="container">
        <div className="page-head">
          <h2>Q&A</h2>
          <div className="muted">Ask questions, answer, mentor approves answers.</div>
        </div>

        <div className="filters">
          <input className="input" placeholder="Search questions..." value={q} onChange={(e) => setQ(e.target.value)} />
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="mostAnswered">Most Answered</option>
          </select>
          <button className="btn btn-primary" onClick={() => alert("Open Ask Question modal (connect later).")}>
            Ask Question
          </button>
        </div>

        {!filtered.length ? <EmptyState message="No questions found." /> : null}

        <div className="list">
          {filtered.map((x) => (
            <button key={x.id} className="list-item" onClick={() => setSelected(x)}>
              <div className="list-title">{x.title}</div>
              <div className="muted">{x.answers} answers</div>
            </button>
          ))}
        </div>

        {selected ? (
          <div className="panel" style={{ marginTop: 16 }}>
            <h3 style={{ marginTop: 0 }}>{selected.title}</h3>
            <div className="muted">This demo shows UI. Connect backend for real Q&A data.</div>

            <div className="row-actions" style={{ marginTop: 12 }}>
              <button className="btn btn-ghost" onClick={() => alert("Answer modal (connect later).")}>Answer</button>
              <button className="btn btn-ghost" onClick={() => alert("Upvote (connect later).")}>Upvote</button>
              <button className="btn btn-ghost" onClick={() => alert("Downvote (connect later).")}>Downvote</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
