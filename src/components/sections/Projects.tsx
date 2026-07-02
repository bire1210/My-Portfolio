import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Volunteer Management System (Backend)",
      description: "A scalable backend for coordinating volunteers, donors, and organizations built with .NET 10. Implements Clean Architecture and Domain-Driven Design (DDD). Uses the Repository Pattern and CQRS via MediatR to completely decouple database reads and writes. Engineered a cross-cutting validation behavior and result pattern for graceful failure states.",
      highlights: [
        "Outbox Pattern for 100% data consistency",
        "MediatR Pipeline Behaviors & Fluent Validation",
        "Custom stateless JWT Authentication",
        "Asynchronous background dispatcher",
        "Advanced Cryptography (Argon2id)"
      ],
      techStack: [".NET 10", "C#", "PostgreSQL", "Docker", "MediatR"]
    },
    {
      title: "Freelance Marketplace Platform",
      description: "A full-stack collaborative platform connecting clients with professionals. Features include complex state management, custom proposal workflows, real-time job matching, and comprehensive role-based dashboards.",
      highlights: [
        "Advanced job filtering and pagination",
        "Responsive, cross-browser layouts",
        "Secure auth flows and protected routes"
      ],
      techStack: ["React.js", "Redux Toolkit", "Axios", "REST APIs"]
    }
  ];

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <h2 className="section-title animate-fade-in-up stagger-1">Projects & Architecture</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} className={`glass-panel project-card animate-fade-in-up stagger-${(index % 4) + 1}`}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-highlights">
                <h4>Key Achivements:</h4>
                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.techStack.map(tech => (
                  <span key={tech} className="badge project-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
