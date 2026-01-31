import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorState from "../components/ErrorState";
import { getProject } from "../services/projectService";

export default function ProjectDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [project, setProject] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setErr("");
      try {
        const res = await getProject(id);
        setProject(res.data);
      } catch (e) {
        setErr("Backend not connected yet. Project details will load once Spring Boot API is running.");
        setProject({
          id,
          title: "Demo Project",
          description: "This is a demo project details page. Connect backend to load real data.",
          status: "IN_PROGRESS",
          tags: ["Demo", "ProjectHUB"],
          githubUrl: "https://github.com/",
          imageUrls: [
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop"
          ]
        });
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return <Loading label="Loading project..." />;
  if (err) return <ErrorState message={err} />;

  return (
    <div className="section">
      <div className="container">
        <div className="page-head">
          <h2>{project?.title}</h2>
          <div className="muted">{project?.status}</div>
        </div>

        <div className="panel">
          <p className="muted">{project?.description}</p>

          <div className="chip-row" style={{ marginTop: 12 }}>
            {(project?.tags || []).map((t) => <span key={t} className="chip">{t}</span>)}
          </div>

          {project?.githubUrl ? (
            <div style={{ marginTop: 12 }}>
              <a className="link" href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub Link
              </a>
            </div>
          ) : null}
        </div>

        <div className="section-head" style={{ marginTop: 20 }}>
          <h2 style={{ fontSize: 24 }}>Gallery</h2>
          <Link className="link" to="/projects">Back to Projects</Link>
        </div>

        <div className="grid3">
          {(project?.imageUrls || []).map((url) => (
            <div className="card" key={url}>
              <img className="card-img" src={url} alt="project" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
