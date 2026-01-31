import React, { useMemo, useState } from "react";
import Card from "../components/Card";

const demo = [
  { id: 1, title: "Project Proposal Guide", type: "ARTICLE", tags: ["Proposal"], image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1200&auto=format&fit=crop" },
  { id: 2, title: "Spring Boot REST Best Practices", type: "VIDEO", tags: ["Spring","API"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop" },
  { id: 3, title: "UI Checklist", type: "TOOL", tags: ["UI"], image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop" },
];

export default function Resources() {
  const [type, setType] = useState("ALL");

  const filtered = useMemo(() => {
    if (type === "ALL") return demo;
    return demo.filter((x) => x.type === type);
  }, [type]);

  return (
    <div className="section">
      <div className="container">
        <div className="page-head">
          <h2>Resources</h2>
          <div className="muted">Articles, videos and tools. Bookmark later with backend.</div>
        </div>

        <div className="filters">
          <select className="select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="ALL">All types</option>
            <option value="ARTICLE">ARTICLE</option>
            <option value="VIDEO">VIDEO</option>
            <option value="TOOL">TOOL</option>
          </select>
          <button className="btn btn-primary" onClick={() => alert("Mentor can add resource (connect backend).")}>
            Add Resource
          </button>
        </div>

        <div className="grid3">
          {filtered.map((r) => (
            <Card
              key={r.id}
              image={r.image}
              title={r.title}
              subtitle={`${r.type} • ${r.tags.join(", ")}`}
              tags={r.tags}
              actions={
                <div className="row-actions">
                  <button className="btn btn-ghost" onClick={() => alert("Open resource URL later")}>Open</button>
                  <button className="btn btn-primary" onClick={() => alert("Bookmark toggle (backend)")}>Bookmark</button>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
