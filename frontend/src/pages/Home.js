import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Card from "../components/Card";

const demoProjects = [
  {
    id: 1,
    title: "Campus Navigation Assistant",
    subtitle: "IN_PROGRESS • AI + Mobile",
    tags: ["AI", "Mobile", "Maps"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Smart Lab Booking System",
    subtitle: "IN_PROGRESS • Web App",
    tags: ["Spring", "React", "MySQL"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Library Digitization Portal",
    subtitle: "COMPLETED • Platform",
    tags: ["Search", "Docs", "Cloud"],
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&auto=format&fit=crop",
  },
];

const demoResources = [
  {
    id: 1,
    title: "How to write a strong project proposal",
    subtitle: "ARTICLE • Academic writing",
    tags: ["Proposal", "Writing"],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Spring Boot REST API best practices",
    subtitle: "VIDEO • Backend",
    tags: ["Spring", "API"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "UI checklist for student projects",
    subtitle: "TOOL • Design",
    tags: ["UI", "Checklist"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop",
  },
];

const demoShowcase = [
  {
    id: 1,
    title: "Robotics Exhibition Winner",
    subtitle: "CATEGORY • Robotics",
    tags: ["Robotics", "Team"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Smart Agriculture Demo",
    subtitle: "CATEGORY • IoT",
    tags: ["IoT", "Sensors"],
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Student Research Spotlight",
    subtitle: "CATEGORY • Research",
    tags: ["Research", "Paper"],
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  const { user, isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Ruhuna ProjectHUB</h1>
          <p>
            A collaborative platform for students to showcase projects, learn from mentors, and build the future.
          </p>

          {isLoggedIn && user?.name ? (
            <div className="welcome">Welcome, <strong>{user.name}</strong></div>
          ) : null}

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary btn-lg">Browse Projects</Link>
            <Link to="/qa" className="btn btn-light btn-lg">Ask a Question</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Latest Projects</h2>
            <Link className="link" to="/projects">View all</Link>
          </div>
          <div className="grid3">
            {demoProjects.map((p) => (
              <Card
                key={p.id}
                image={p.image}
                title={p.title}
                subtitle={p.subtitle}
                tags={p.tags}
                actions={<Link className="btn btn-ghost" to={`/projects/${p.id}`}>View</Link>}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Featured Resources</h2>
            <Link className="link" to="/resources">Explore</Link>
          </div>
          <div className="grid3">
            {demoResources.map((r) => (
              <Card
                key={r.id}
                image={r.image}
                title={r.title}
                subtitle={r.subtitle}
                tags={r.tags}
                actions={<Link className="btn btn-ghost" to="/resources">Open</Link>}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Top Showcase</h2>
            <Link className="link" to="/showcase">See more</Link>
          </div>
          <div className="grid3">
            {demoShowcase.map((s) => (
              <Card
                key={s.id}
                image={s.image}
                title={s.title}
                subtitle={s.subtitle}
                tags={s.tags}
                actions={<Link className="btn btn-ghost" to="/showcase">View</Link>}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
