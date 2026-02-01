import React from "react";
import JoinButton from "./JoinButton";

function tagList(tags) {
  if (!tags || tags.length === 0) return null;
  return tags.slice(0, 3);
}

export default function ProjectCard({ project, onOpen, onJoin }) {
  const isInProgress = project.status === "IN_PROGRESS";

  return (
    <div className="projectCard">
      <div className="projectCard__top">
        <div className={`badge ${isInProgress ? "badge--progress" : "badge--done"}`}>
          {isInProgress ? "IN PROGRESS" : "COMPLETED"}
        </div>
        <div className="projectCard__meta">
          {project.membersCount != null ? `${project.membersCount} members` : "—"}
        </div>
      </div>

      <h3 className="projectCard__title" onClick={onOpen} role="button" tabIndex={0}>
        {project.title}
      </h3>

      <p className="projectCard__desc">
        {project.description?.length > 120 ? project.description.slice(0, 120) + "…" : project.description}
      </p>

      <div className="projectCard__tags">
        {tagList(project.tags)?.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="projectCard__actions">
        <button className="btn btn-ghost btn-sm" onClick={onOpen}>View</button>
        {isInProgress && <JoinButton onClick={onJoin} />}
      </div>
    </div>
  );
}
