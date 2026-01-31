import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import ProjectDetails from "./pages/ProjectDetails";
import QA from "./pages/QA";
import Resources from "./pages/Resources";
import Showcase from "./pages/Showcase";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profiles.js";
import MentorDashboard from "./pages/MentorDashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mentor" element={<MentorDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
