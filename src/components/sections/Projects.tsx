"use client";

import './Projects.css';
import { motion } from 'framer-motion';
import { CheckCircle2, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Volunteer Management System (Backend)",
      description: "A scalable backend for coordinating volunteers, donors, and organizations built with .NET 10. Implements Clean Architecture and Domain-Driven Design (DDD). Uses the Repository Pattern and CQRS via MediatR to completely decouple database reads and writes.",
      highlights: [
        "Outbox Pattern for 100% data consistency",
        "MediatR Pipeline Behaviors & Fluent Validation",
        "Custom stateless JWT Authentication",
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
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Projects & Architecture</h2>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="glass-panel project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <FolderGit2 className="project-icon" size={32} />
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-highlights">
                <h4>Key Achievements:</h4>
                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.techStack.map(tech => (
                  <span key={tech} className="badge project-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
