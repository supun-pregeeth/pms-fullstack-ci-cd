import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import QA from "../pages/QA/QA";
import Resources from "../pages/Resources/Resources";
import Showcase from "../pages/Showcase/Showcase";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profiles/Profiles";
import MentorDashboard from "../pages/MentorDashboard/MentorDashboard";
import NotFound from "../pages/NotFound/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />

      <Route path="/qa" element={<QA />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/showcase" element={<Showcase />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mentor"
        element={
          <ProtectedRoute>
            <RoleRoute role="MENTOR">
              <MentorDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
