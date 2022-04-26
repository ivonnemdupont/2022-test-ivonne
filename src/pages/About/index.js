import React from "react";
import "./About.css";

export default function About() {
  return (
    <main>
      <div className="container">
        <h2 className="page-title">React Frontend Code Challenge</h2>
      </div>

      <section className="container flex flex--center">
        <article className="card">
          <strong>Objective:</strong> Develop a Web Page using information from
          the SWAPI API.
        </article>
      </section>

      <section className="container flex flex--center">
        <article className="card">
          <strong>Used technologies: </strong> 
          - React - React Hooks - React Router - Axios
        </article>
      </section>
    </main>
  );
}
