import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import Card from "../components/Card";
import { listProjects } from "../services/projectService";

function localDemoProjects() {
  return [
    { id: 1, title: "Campus Navigation Assistant", status: "IN_PROGRESS", tags: ["AI","Maps"], imageUrls: ["https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop"] },
    { id: 2, title: "Smart Lab Booking System", status: "IN_PROGRESS", tags: ["React","Spring"], imageUrls: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"] },
    { id: 3, title: "Library Digitization Portal", status: "COMPLETED", tags: ["Docs","Search"], imageUrls: ["https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&auto=format&fit=crop"] },
    { id: 4, title: "IoT Smart Greenhouse", status: "IN_PROGRESS", tags: ["IoT","Sensors"], imageUrls: ["https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&auto=format&fit=crop"] },
    { id: 5, title: "Student Result Analyzer", status: "COMPLETED", tags: ["Data","Charts"], imageUrls: ["https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop"] },
  ];
}

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [items, setItems] = useState([]);

  // UI filters
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("ALL");

  // simple client pagination (works with backend later)
  const [page, setPage] = useState(0);
  const pageSize = 9;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setErr("");
      try {
        // if backend exists, use it
        const res = await listProjects({ q, status: status === "ALL" ? "" : status, page, size: pageSize });
        const data = res.data;
        // expecting {items:[], ...}
        setItems(data.items || []);
      } catch (e) {
        // fallback to local demo
        setItems(localDemoProjects());
        setErr("Backend not connected yet. Showing demo projects.");
      } finally {
        setLoading(false);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    let arr = [...items];
    if (q.trim()) {
      const s = q.toLowerCase();
      arr = arr.filter((p) => (p.title || "").toLowerCase().includes(s) || (p.tags || []).join(" ").toLowerCase().includes(s));
    }
    if (status !== "ALL") arr = arr.filter((p) => p.status === status);
    return arr;
  }, [items, q, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice(page * pageSize, page * pageSize + pageSize);

  useEffect(() => {
    if (page > totalPages - 1) setPage(0);
  }, [totalPages, page]);

  return (
    <div className="section">
      <div className="container">
        <div className="page-head">  
          <h2>Projects</h2>
          <div className="muted">Search, filter, join in-progress projects.</div>
        </div>

        <div className="filters">
          <input
            className="input"
            placeholder="Search by title or tags..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="ALL">All status</option>
            <option value="IN_PROGRESS">In progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        {loading ? <Loading label="Loading projects..." /> : null}
        {!loading && err ? <ErrorState message={err} /> : null}
        {!loading && !paged.length ? <EmptyState message="No projects found." /> : null}

        {!loading && paged.length ? (
          <>
            <div className="grid3">
              {paged.map((p) => (
                <Card
                  key={p.id}
                  image={p.imageUrls?.[0]}
                  title={p.title}
                  subtitle={`${p.status} • ${(p.tags || []).join(", ")}`}
                  tags={p.tags || []}
                  actions={
                    <div className="row-actions">
                      <Link className="btn btn-ghost" to={`/projects/${p.id}`}>View</Link>
                      {p.status === "IN_PROGRESS" ? (
                        <button className="btn btn-primary" onClick={() => alert("Join request sent (connect to backend later).")}>
                          Join
                        </button>
                      ) : null}
                    </div>
                  }
                />
              ))}
            </div>

            <div className="pager">
              <button className="btn btn-ghost" disabled={page === 0} onClick={() => setPage((x) => x - 1)}>Prev</button>
              <div className="muted">Page {page + 1} / {totalPages}</div>
              <button className="btn btn-ghost" disabled={page >= totalPages - 1} onClick={() => setPage((x) => x + 1)}>Next</button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
