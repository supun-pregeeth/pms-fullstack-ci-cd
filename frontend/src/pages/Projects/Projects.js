import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProjectFilters from "../../components/project/ProjectFilters";
import ProjectCard from "../../components/project/ProjectCard";
import Pagination from "../../components/common/Pagination/Pagination";
import LoadingState from "../../components/common/State/LoadingState";
import ErrorState from "../../components/common/State/ErrorState";
import EmptyState from "../../components/common/State/EmptyState";
import projectService from "../../services/projectService";
import { useToast } from "../../components/common/Toast/ToastProvider";

export default function Projects() {
  const nav = useNavigate();
  const { showToast } = useToast();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({ items: [], page: 1, totalPages: 1 });

  const params = useMemo(() => {
    return { search: search || undefined, status: status || undefined, page: page - 1, size: 9 };
  }, [search, status, page]);

  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      setError("");
      try {
        // Expected backend response format:
        // { items: [...], page: 0-based, totalPages: n }
        const res = await projectService.list(params);

        // If your backend uses Spring Page:
        // convert it here. Example:
        // const res = { items: raw.content, page: raw.number, totalPages: raw.totalPages };

        if (!alive) return;
        setData({
          items: res.items || [],
          page: (res.page ?? 0) + 1,
          totalPages: res.totalPages ?? 1
        });
      } catch (e) {
        if (!alive) return;
        setError("Could not load projects.");
      } finally {
        if (alive) setLoading(false);
      }
    }

    load();
    return () => { alive = false; };
  }, [params]);

  function clearFilters() {
    setSearch("");
    setStatus("");
    setPage(1);
  }

  function openProject(p) {
    nav(`/projects/${p.id}`);
  }

  async function joinProject(p) {
    // hook to backend later: POST /projects/{id}/join-requests
    showToast("success", `Join request sent for "${p.title}"`);
  }

  return (
    <div className="container page page--tightTop">
      <div className="pageHeader">
        <div>
          <h1 className="pageTitle">Projects</h1>
          <p className="pageSubtitle">
            Explore university projects, join teams, and build real outcomes.
          </p>
        </div>

        <div className="pageHeader__actions">
          <a className="btn btn-primary" href="/projects/new">
            Create Project
          </a>
        </div>
      </div>

      <ProjectFilters
        search={search}
        status={status}
        onChangeSearch={(v) => { setSearch(v); setPage(1); }}
        onChangeStatus={(v) => { setStatus(v); setPage(1); }}
        onClear={clearFilters}
      />

      {loading && (
        <div className="sectionBlock">
          <LoadingState title="Loading projects" subtitle="Fetching latest projects from server..." />
        </div>
      )}

      {!loading && error && (
        <div className="sectionBlock">
          <ErrorState
            title="Failed to load projects"
            subtitle={error}
            actionLabel="Retry"
            onAction={() => setPage((p) => p)}
          />
        </div>
      )}

      {!loading && !error && data.items.length === 0 && (
        <div className="sectionBlock">
          <EmptyState
            title="No projects found"
            subtitle="Try another search or clear filters."
            actionLabel="Clear filters"
            onAction={clearFilters}
          />
        </div>
      )}

      {!loading && !error && data.items.length > 0 && (
        <>
          <div className="grid grid--cards">
            {data.items.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onOpen={() => openProject(p)}
                onJoin={() => joinProject(p)}
              />
            ))}
          </div>

          <Pagination page={data.page} totalPages={data.totalPages} onPage={setPage} />
        </>
      )}
    </div>
  );
}
