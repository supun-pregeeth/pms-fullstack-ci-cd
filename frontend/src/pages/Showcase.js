import React, { useMemo, useState } from "react";
import Card from "../components/Card";

const demo = [
  { id: 1, title: "Robotics Exhibition Winner", category: "Robotics", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop" },
  { id: 2, title: "Smart Agriculture Demo", category: "IoT", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&auto=format&fit=crop" },
  { id: 3, title: "Research Spotlight", category: "Research", image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=1200&auto=format&fit=crop" },
];

export default function Showcase() {
  const [cat, setCat] = useState("ALL");

  const filtered = useMemo(() => {
    if (cat === "ALL") return demo;
    return demo.filter((x) => x.category === cat);
  }, [cat]);

  return (
    <div className="section">
      <div className="container">
        <div className="page-head">
          <h2>Showcase</h2>
          <div className="muted">Top projects & achievements. Like posts (backend).</div>
        </div>

        <div className="filters">
          <select className="select" value={cat} onChange={(e) => setCat(e.target.value)}>
            <option value="ALL">All categories</option>
            <option value="Robotics">Robotics</option>
            <option value="IoT">IoT</option>
            <option value="Research">Research</option>
          </select>
          <button className="btn btn-primary" onClick={() => alert("Mentor can add showcase post (backend)")}>
            Add Showcase
          </button>
        </div>

        <div className="grid3">
          {filtered.map((s) => (
            <Card
              key={s.id}
              image={s.image}
              title={s.title}
              subtitle={`Category • ${s.category}`}
              tags={[s.category]}
              actions={
                <div className="row-actions">
                  <button className="btn btn-ghost" onClick={() => alert("Open external link later")}>View</button>
                  <button className="btn btn-primary" onClick={() => alert("Like toggle (backend)")}>Like</button>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
