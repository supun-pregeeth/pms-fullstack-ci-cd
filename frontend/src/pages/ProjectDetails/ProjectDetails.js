import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  return (
    <div className="container page">
      <h1 className="pageTitle">Project Details</h1>
      <p className="pageText">Project ID: {id}</p>
    </div>
  );
}
