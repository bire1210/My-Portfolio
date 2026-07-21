"use client";

import './Experience.css';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Experience</h2>
        </motion.div>
        
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.title}
              className="experience-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="timeline-dot"></div>
              <div className="glass-panel experience-card">
                <div className="experience-header">
                  <div className="experience-header-main">
                    <div className="experience-icon-wrapper">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <div className="experience-company">{exp.company}</div>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period"><Calendar size={14}/> {exp.period}</span>
                    <span className="experience-location"><MapPin size={14}/> {exp.location}</span>
                  </div>
                </div>
                <p className="experience-desc">{exp.description}</p>
                <div className="experience-tech">
                  {exp.techStack.map(tech => (
                    <span key={tech} className="badge project-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
