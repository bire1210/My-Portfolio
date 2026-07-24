"use client";

import './Projects.css';
import { motion } from 'framer-motion';
import { CheckCircle2, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Full-Stack Social Networking Architecture",
      description: "Engineered a feature-rich, high-performance social media platform replicating Facebook's complex interactions. Focuses on scalable architecture, real-time data flow, secure user authentication, and high-frequency social interactions.",
      highlights: [
        "Cutting-Edge Frontend: Built with Next.js 16 and React 19, utilizing Server Components for lightning-fast initial loads and Tailwind CSS 4 with Shadcn UI.",
        "Robust Backend: Developed a RESTful API using Node.js and Express, managing complex social relationships via MongoDB & Mongoose.",
        "State Management: Implemented Zustand for global state and TanStack Query for efficient server-side state synchronization, caching, and optimistic UI updates.",
        "Advanced Social Logic: Engineered a comprehensive Notification System supporting multiple types and a private Messaging Engine.",
        "Security & Data Integrity: Integrated secure JWT-based authentication with HTTP-only cookies and protected routes, alongside Multer for managed media uploads.",
        "DevOps & Deployment: Containerized the entire ecosystem (Frontend, Backend, Database) using Docker and Docker Compose."
      ],
      techStack: ["Next.js", "React 19", "Node.js", "Express", "MongoDB", "Zustand", "Docker"]
    },
    {
      title: "Volunteer Management System (Backend)",
      description: "Built a scalable enterprise-grade backend for coordinating volunteers, donors, and organizations utilizing .NET 10, Clean Architecture, and DDD.",
      highlights: [
        "Clean Architecture: Separated core business logic from infrastructure and API layers for maximum testability.",
        "Domain-Driven Design (DDD): Built rich domain models utilizing Encapsulated Entities and strict Value Objects.",
        "Repository Pattern: Abstracted data access layers into clean aggregate interfaces, decoupling EF Core context.",
        "CQRS (MediatR): Decoupled Database Reads from Writes, improving code clarity and API scaling.",
        "MediatR Pipeline Behaviors: Engineered cross-cutting Validation Behaviors to automatically intercept requests.",
        "Fluent Validation: Implemented strongly-typed, comprehensive validation rules for 'fail-fast' execution.",
        "Result Pattern: Replaced expensive exception-throwing with functional predictable failures.",
        "Domain Events & Outbox Pattern: Guaranteed 100% data consistency by saving business changes and domain events in the same transaction.",
        "Background Processing: Built an asynchronous background dispatcher to constantly process the Outbox table.",
        "Security: Engineered Custom JWT Authentication, Argon2id hashing algorithms, and strict Role-Based Access Control (RBAC).",
        "API Protection & Workflows: Implemented Rate Limiting, strict onboarding pipelines with Tax ID validations, and Automated Emailing via MailKit.",
        "Containerization: Wrote custom Dockerfiles and docker-compose pipelines for single-command environment spin-ups."
      ],
      techStack: [".NET 10", "C#", "PostgreSQL", "Docker", "MediatR", "EF Core", "MailKit"]
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
