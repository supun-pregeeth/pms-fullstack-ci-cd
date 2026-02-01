import React, { useEffect, useMemo, useState } from "react";
import LoadingState from "../../components/common/State/LoadingState";
import ErrorState from "../../components/common/State/ErrorState";
import EmptyState from "../../components/common/State/EmptyState";
import qaService from "../../services/qaService";

export default function QA() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("NEWEST");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);

  const params = useMemo(() => ({ search: search || undefined, sort }), [search, sort]);

  useEffect(() => {
    let alive = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await qaService.listQuestions(params);
        if (!alive) return;
        setItems(res.items || res || []);
      } catch (e) {
        if (!alive) return;
        setError("Could not load questions.");
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
          <h1 className="pageTitle">Q&amp;A</h1>
          <p className="pageSubtitle">Ask questions, share answers, and get mentor-approved guidance.</p>
        </div>
        <div className="pageHeader__actions">
          <button className="btn btn-primary">Ask Question</button>
        </div>
      </div>

      <div className="filterBar">
        <div className="filterBar__left" style={{ gridTemplateColumns: "1.2fr 0.6fr" }}>
          <div className="field">
            <label className="field__label">Search</label>
            <input className="input input--soft" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search questions..." />
          </div>

          <div className="field">
            <label className="field__label">Sort</label>
            <select className="select input--soft" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="NEWEST">Newest</option>
              <option value="MOST_ANSWERED">Most Answered</option>
            </select>
          </div>
        </div>

        <div className="filterBar__right">
          <button className="btn btn-ghost btn-sm" onClick={() => { setSearch(""); setSort("NEWEST"); }}>
            Clear
          </button>
        </div>
      </div>

      <div className="sectionBlock">
        {loading && <LoadingState title="Loading questions" subtitle="Fetching Q&A..." />}
        {!loading && error && <ErrorState title="Failed to load Q&A" subtitle={error} />}
        {!loading && !error && items.length === 0 && <EmptyState title="No questions yet" subtitle="Be the first to ask a question." actionLabel="Ask now" onAction={() => {}} />}
      </div>

      {!loading && !error && items.length > 0 && (
        <div className="grid grid--cards">
          {items.map((q) => (
            <div key={q.id} className="projectCard">
              <div className="projectCard__top">
                <div className="badge">QUESTION</div>
                <div className="projectCard__meta">{q.answersCount ?? 0} answers</div>
              </div>
              <h3 className="projectCard__title">{q.title}</h3>
              <p className="projectCard__desc">{q.body?.slice(0, 120) || "—"}</p>
              <div className="projectCard__actions">
                <button className="btn btn-ghost btn-sm">View</button>
                <button className="btn btn-primary btn-sm">Answer</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
