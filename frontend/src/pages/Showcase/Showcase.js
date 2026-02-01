import React, { useEffect, useMemo, useState } from "react";
import LoadingState from "../../components/common/State/LoadingState";
import ErrorState from "../../components/common/State/ErrorState";
import EmptyState from "../../components/common/State/EmptyState";
import showcaseService from "../../services/showcaseService";

export default function Showcase() {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);

  const params = useMemo(() => ({ category: category || undefined }), [category]);

  useEffect(() => {
    let alive = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await showcaseService.list(params);
        if (!alive) return;
        setItems(res.items || res || []);
      } catch (e) {
        if (!alive) return;
        setError("Could not load showcase posts.");
      } finally {
        if (alive) setLoading(false);
      }
    }
    load();
    return () => (alive = false);
  }, [params]);

  return (
    <div className="container page page--tightTop">
      <div className="pageHeader">
        <div>
          <h1 className="pageTitle">Showcase</h1>
          <p className="pageSubtitle">Best student work curated for the university.</p>
        </div>
        <div className="pageHeader__actions">
          <button className="btn btn-primary">Add Showcase</button>
        </div>
      </div>

      <div className="filterBar">
        <div className="filterBar__left" style={{ gridTemplateColumns: "1fr" }}>
          <div className="field">
            <label className="field__label">Category</label>
            <input className="input input--soft" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g. Robotics, AI, Web" />
          </div>
        </div>
        <div className="filterBar__right">
          <button className="btn btn-ghost btn-sm" onClick={() => setCategory("")}>Clear</button>
        </div>
      </div>

      <div className="sectionBlock">
        {loading && <LoadingState title="Loading showcase" subtitle="Fetching top posts..." />}
        {!loading && error && <ErrorState title="Failed to load showcase" subtitle={error} />}
        {!loading && !error && items.length === 0 && <EmptyState title="No showcase posts yet" subtitle="Mentors can add featured work." />}
      </div>

      {!loading && !error && items.length > 0 && (
        <div className="grid grid--cards">
          {items.map((s) => (
            <div key={s.id} className="projectCard">
              <div className="projectCard__top">
                <div className="badge">{(s.category || "SHOWCASE").toUpperCase()}</div>
                <div className="projectCard__meta">{s.likesCount ?? 0} likes</div>
              </div>
              <h3 className="projectCard__title">{s.title}</h3>
              <p className="projectCard__desc">{s.description?.slice(0, 120) || "—"}</p>
              <div className="projectCard__actions">
                <button className="btn btn-ghost btn-sm">View</button>
                <button className="btn btn-primary btn-sm">Like</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
