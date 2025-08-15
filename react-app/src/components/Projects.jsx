import projects from "../data/projects.json";

export function ProjectsSection(props) {
  const projectCards = projects.map((proj, index) => (
    <ProjectCard key={index} {...proj} />
  ));

  return (
    <section className="projects-section">
      <div className="container">{projectCards}</div>
    </section>
  );
}

function ProjectCard({ title, subtitle, tags, img }) {
  return (
    <div className="card project-card">
      <img src={img} className="project-img" alt="Workshop sticky notes" />
      <div className="card-body p-4 project-content">
        <div className="project-tags">{tags}</div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{subtitle}</p>
        <a
          href="viata-onboarding-form-redesign.html"
          className="btn btn-case-study"
        >
          View Case Study
        </a>
      </div>
    </div>
  );
}
