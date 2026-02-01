import React, { useEffect, useMemo, useState } from "react";
import LoadingState from "../../components/common/State/LoadingState";
import ErrorState from "../../components/common/State/ErrorState";
import EmptyState from "../../components/common/State/EmptyState";
import resourceService from "../../services/resourceService";

export default function Resources() {
  const [type, setType] = useState("");
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);

  const params = useMemo(() => ({ type: type || undefined, tag: tag || undefined }), [type, tag]);

  useEffect(() => {
    let alive = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await resourceService.list(params);
        if (!alive) return;
        setItems(res.items || res || []);
      } catch (e) {
        if (!alive) return;
        setError("Could not load resources.");
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
          <h1 className="pageTitle">Resources</h1>
          <p className="pageSubtitle">Articles, videos, and tools recommended by mentors.</p>
        </div>
        <div className="pageHeader__actions">
          <button className="btn btn-primary">Add Resource</button>
        </div>
      </div>

      <div className="filterBar">
        <div className="filterBar__left">
          <div className="field">
            <label className="field__label">Type</label>
            <select className="select input--soft" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All</option>
              <option value="ARTICLE">Article</option>
              <option value="VIDEO">Video</option>
              <option value="TOOL">Tool</option>
            </select>
          </div>

          <div className="field">
            <label className="field__label">Tag</label>
            <input className="input input--soft" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="e.g. React, AI, DevOps" />
          </div>
        </div>

        <div className="filterBar__right">
          <button className="btn btn-ghost btn-sm" onClick={() => { setType(""); setTag(""); }}>
            Clear
          </button>
        </div>
      </div>

      <div className="sectionBlock">
        {loading && <LoadingState title="Loading resources" subtitle="Fetching mentor resources..." />}
        {!loading && error && <ErrorState title="Failed to load resources" subtitle={error} />}
        {!loading && !error && items.length === 0 && <EmptyState title="No resources found" subtitle="Try different filters." />}
      </div>

      {!loading && !error && items.length > 0 && (
        <div className="grid grid--cards">
          {items.map((r) => (
            <div key={r.id} className="projectCard">
              <div className="projectCard__top">
                <div className="badge">{r.type || "RESOURCE"}</div>
                <div className="projectCard__meta">Bookmark</div>
              </div>
              <h3 className="projectCard__title">{r.title}</h3>
              <p className="projectCard__desc">{r.description?.slice(0, 120) || "—"}</p>
              <div className="projectCard__actions">
                <a className="btn btn-ghost btn-sm" href={r.url || "#"} target="_blank" rel="noreferrer">Open</a>
                <button className="btn btn-primary btn-sm">Bookmark</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
