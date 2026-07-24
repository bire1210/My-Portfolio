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
      description: "Developing a scalable multi-vendor eCommerce platform using Next.js. The application supports multiple vendors managing their own products, orders, and storefronts within a unified system.",
      responsibilities: [
        "Building a modern, high-performance web experience.",
        "Developing secure authentication and dynamic product filtering.",
        "Implementing real-time data handling and responsive UIs optimized for usability.",
        "Focusing on clean architecture, efficient state management, and production-ready code."
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "REST APIs"]
    },
    {
      title: "Frontend Developer (Internship)",
      company: "Niyat Software Development Company",
      period: "Aug 2025 - Oct 2025",
      location: "Addis Ababa, Ethiopia",
      description: "Developed responsive and user-friendly interfaces for the Admin and Dispatcher modules of a Ride Hailing System.",
      responsibilities: [
        "Implemented features for driver management, ride monitoring, trip assignment, customer management, and operational dashboards.",
        "Integrated frontend applications with RESTful APIs to display and manage real-time ride and driver data.",
        "Built reusable UI components and managed application state to improve maintainability and scalability.",
        "Collaborated with backend developers and designers to deliver efficient workflows for transportation operations.",
        "Optimized application performance and ensured a seamless user experience across different devices and screen sizes."
      ],
      techStack: ["React.js", "JavaScript", "REST APIs", "State Management"]
    },
    {
      title: "React.js Frontend Developer (Internship)",
      company: "Sheqlee – Freelance Marketplace Platform",
      period: "Nov 2024 - Mar 2025",
      location: "Mekelle",
      description: "Collaborated with a team to build responsive, reusable, and scalable user interfaces for a full-stack freelance marketplace platform inspired by Upwork, connecting clients with freelancers.",
      responsibilities: [
        "Developed reusable React components for improved maintainability.",
        "Implemented client-side routing with React Router and managed application state using Redux Toolkit.",
        "Integrated REST APIs using Axios/Fetch, working closely with backend developers.",
        "Implemented authentication flow (Login, Register, Protected Routes).",
        "Created job posting, job listing, and proposal management pages.",
        "Fixed bugs, optimized application performance, and ensured cross-browser compatibility."
      ],
      techStack: ["React.js", "Redux Toolkit", "React Router", "Axios", "CSS3", "HTML5"]
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
              key={exp.title + index}
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
                {exp.responsibilities && (
                  <ul className="experience-responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                )}
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
