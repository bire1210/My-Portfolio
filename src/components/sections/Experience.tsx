import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Software Engineer",
      company: "Niyat Consultancy",
      period: "Dec 2025 - Present",
      location: "Addis Ababa, Ethiopia · On-site",
      description: "Developing a scalable multi-vendor eCommerce platform using Next.js. Supports multiple vendors managing their own products, orders, and storefronts within a unified system. Features include secure authentication, dynamic product filtering, and real-time data handling.",
      techStack: ["Next.js", "Tailwind CSS", "React.js"]
    },
    {
      title: "Frontend Developer (Internship)",
      company: "Niyat Software Development Company",
      period: "Aug 2025 - Oct 2025",
      location: "Remote",
      description: "Developed responsive interfaces for Admin and Dispatcher modules of a Ride Hailing System using React.js. Implemented features for driver management, ride monitoring, trip assignment, and operational dashboards integrated with RESTful APIs.",
      techStack: ["React.js", "JavaScript", "REST APIs"]
    },
    {
      title: "React.js Frontend Developer (Internship)",
      company: "Sheqlee – Freelance Marketplace Platform",
      period: "Nov 2024 - Mar 2025",
      location: "Mekelle",
      description: "Built responsive, reusable UI components for a freelance marketplace connecting clients and freelancers. Implemented authentication flows, job posting/search with pagination, proposal management pages, and integrated APIs via Axios.",
      techStack: ["React.js", "Redux Toolkit", "React Router", "Axios", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        <h2 className="section-title animate-fade-in-up stagger-1">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.title} className={`glass-panel experience-card animate-fade-in-up stagger-${(index % 4) + 1}`}>
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
              </div>
              <p className="experience-desc">{exp.description}</p>
              <div className="experience-tech">
                {exp.techStack.map(tech => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
