import React, { useEffect, useState } from "react";
import projectService from "../../services/projectService";
import resourceService from "../../services/resourceService";
import showcaseService from "../../services/showcaseService";

import ProjectCard from "../../components/project/ProjectCard";
import ResourceCard from "../../components/resources/ResourceCard";
import ShowcaseCard from "../../components/showcase/ShowcaseCard";

export default function Home() {
  const [latestProjects, setLatestProjects] = useState([]);
  const [featuredResources, setFeaturedResources] = useState([]);
  const [topShowcase, setTopShowcase] = useState([]);

  useEffect(() => {
    async function load() {
      const p = await projectService.list({ page: 0, size: 3 });
      const r = await resourceService.list({});
      const s = await showcaseService.list({});

      setLatestProjects(p.items || []);
      setFeaturedResources((r.items || []).slice(0, 3));
      setTopShowcase((s.items || []).slice(0, 3));
    }
    load();
  }, []);

  return (
    <div className="homePage">
      {/* HERO (keep your heroModern section exactly as you already have) */}
      <section className="heroModern">
        <div className="heroModern__bg" />
        <div className="container heroModern__container">
          <div className="heroModern__pill">
            <span className="heroModern__dot" />
            Ruhuna Projecthub
            <span className="heroModern__sep">•</span>
            Projects Mentors • Showcase
          </div>

          <h1 className="heroModern__title">
            Build Projects That
            <br />
            Make Real Impact
          </h1>

          <p className="heroModern__subtitle">
            Publish university projects, find teammates, and get mentor feedback.
            Everything in one place — simple, modern, and student-friendly.
          </p>

          <div className="heroModern__actions">
            <a className="btn btn-primary btn-lg" href="/projects">Browse Projects</a>
            <a className="btn btn-ghost btn-lg" href="/qa">Ask a Question</a>
          </div>

          <div className="heroModern__stats">
            <div className="statCard">
              <div className="statCard__num">400+</div>
              <div className="statCard__label">Students</div>
            </div>
            <div className="statCard">
              <div className="statCard__num">50+</div>
              <div className="statCard__label">Mentors</div>
            </div>
            <div className="statCard">
              <div className="statCard__num">200+</div>
              <div className="statCard__label">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="container homeSections">
        <div className="homeBlock">
          <div className="homeBlock__head">
            <div>
              <h2 className="homeBlock__title">Latest Projects</h2>
              <p className="homeBlock__sub">Fresh projects looking for teammates and feedback.</p>
            </div>
            <a className="btn btn-ghost btn-sm" href="/projects">View all</a>
          </div>

          <div className="grid grid--cards">
            {latestProjects.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={() => { window.location.href = `/projects/${p.id}`; }} onJoin={() => {}} />
            ))}
          </div>
        </div>

        <div className="homeBlock">
          <div className="homeBlock__head">
            <div>
              <h2 className="homeBlock__title">Featured Resources</h2>
              <p className="homeBlock__sub">Mentor-recommended articles, videos, and tools.</p>
            </div>
            <a className="btn btn-ghost btn-sm" href="/resources">View all</a>
          </div>

          <div className="grid grid--cards">
            {featuredResources.map((r) => (
              <ResourceCard key={r.id} r={r} onBookmark={() => {}} />
            ))}
          </div>
        </div>

        <div className="homeBlock">
          <div className="homeBlock__head">
            <div>
              <h2 className="homeBlock__title">Top Showcase</h2>
              <p className="homeBlock__sub">Highlighted work across robotics, AI, and web.</p>
            </div>
            <a className="btn btn-ghost btn-sm" href="/showcase">View all</a>
          </div>

          <div className="grid grid--cards">
            {topShowcase.map((s) => (
              <ShowcaseCard key={s.id} s={s} onView={() => {}} onLike={() => {}} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
